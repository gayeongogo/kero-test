import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import results from "../../data/results.json";
import foodData from "../../data/food.json";
import * as R from "./Result.styled";
import { toPng } from "html-to-image";
import logo from "../../assets/images/kero_logo_green.png";

function Result({ name, mbti, setName, setMbti }) {
    const [capturing, setCapturing] = useState(false); // 캡처 상태 관리
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

    // 결과 매칭
    const resultData = results.find((result) => result.mbti === mbti);

    // 랜덤 추천 음식
    const randomFoodRef = useRef(
        foodData[Math.floor(Math.random() * foodData.length)]
    );
    const randomFood = randomFoodRef.current; // 랜덤 음식 값

    const navigate = useNavigate();

    // 재시작
    const handleRestart = () => {
        // 로컬스토리지에서 name과 mbti 삭제
        localStorage.removeItem("name");
        localStorage.removeItem("mbti");

        // 상태 초기화
        setName("");
        setMbti("");
        navigate("/");
    };

    const basePath = "/assets/images";

    const handleShareImage = () => {
        setCapturing(true);
        const resultElement = document.getElementById("capture-area"); // 캡처 대상

        if (resultElement) {
            setIsLoading(true);
            requestAnimationFrame(() => {
                toPng(resultElement)
                    .then((dataUrl) => {
                        // Blob으로 변환
                        fetch(dataUrl)
                            .then((res) => res.blob())
                            .then((blob) => {
                                const file = new File(
                                    [blob],
                                    `${name}_kero.png`,
                                    {
                                        type: "image/png",
                                    }
                                );

                                // Web Share API로 공유
                                if (
                                    navigator.canShare &&
                                    navigator.canShare({ files: [file] })
                                ) {
                                    navigator.share({
                                        files: [file],
                                        title: "내 개구리 결과",
                                        text: `${name}의 개구리 결과를 확인해보세요!`,
                                    });
                                } else {
                                    alert(
                                        "이 브라우저는 공유 기능을 지원하지 않습니다."
                                    );
                                }
                            })
                            .finally(() => {
                                // 작업 완료 후 로딩 상태 비활성화
                                setIsLoading(false);
                            });
                    })
                    .catch((err) => {
                        console.error("이미지 공유 실패:", err);
                        alert("이미지 공유에 실패했습니다. 다시 시도하세요");
                        setIsLoading(false); // 실패 시에도 로딩 비활성화
                    });
            });
        }
    };

    return (
        <R.Container>
            <R.Main>
                <R.Capture id="capture-area">
                    {capturing && (
                        <R.Logo>
                            <img src={logo} alt="로고이미지" />
                        </R.Logo>
                    )}
                    <R.Title>올해 {name} 의 개구리는</R.Title>
                    <R.Name>{resultData.name}</R.Name>
                    <R.FrogImage>
                        <img
                            src={`${basePath}/${resultData.img}`}
                            alt="결과이미지"
                        />
                    </R.FrogImage>
                    <R.Feature>
                        <R.Message>{resultData.feature}</R.Message>
                    </R.Feature>
                </R.Capture>
                <R.Section>
                    <strong>✉️ 올해의 메시지</strong>
                    <p>{resultData.message}</p>
                </R.Section>
                <R.Section>
                    <strong>🥢 오늘의 케로 추천 메뉴</strong>
                    <R.Food>
                        <img
                            src={`${basePath}/${randomFood.image}.avif`}
                            alt="결과이미지"
                        />
                        <p>{randomFood.name}</p>
                    </R.Food>
                </R.Section>
                <R.Section>
                    <strong>✨ 당신과 잘 맞는 유형</strong>
                    {resultData.matches.map((match) => (
                        <R.Match key={match.name}>
                            <div>
                                <img
                                    src={`${basePath}/${match.img}`}
                                    alt="결과이미지"
                                />
                            </div>
                            <p>{match.name}</p>
                        </R.Match>
                    ))}
                </R.Section>
                <R.ButtonGroup>
                    <button onClick={handleRestart}>다시하기</button>
                    <button onClick={handleShareImage}>
                        {isLoading ? <R.Loader /> : "공유하기"}
                    </button>
                </R.ButtonGroup>
            </R.Main>
        </R.Container>
    );
}

export default Result;
