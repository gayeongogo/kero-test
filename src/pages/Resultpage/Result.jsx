import { useNavigate } from "react-router-dom";
import results from "../../data/results.json";
import foodData from "../../data/food.json";
import * as R from "./Result.styled";

function Result({ name, mbti, setName, setMbti }) {
    // 결과 매칭
    const resultData = results.find((result) => result.mbti === mbti);

    // 랜덤 추천 음식
    const randomFood = foodData[Math.floor(Math.random() * foodData.length)];

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

    return (
        <R.Container>
            <R.Main>
                <R.Title>올해 {name} 의 개구리는</R.Title>
                <R.Name>{resultData.name}</R.Name>
                <R.ResultCard>
                    <R.FrogImage>
                        <img
                            src={`${basePath}/${resultData.img}`}
                            alt="결과이미지"
                        />
                    </R.FrogImage>
                    <R.Feature>
                        <R.Message>{resultData.feature}</R.Message>
                    </R.Feature>
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
                </R.ResultCard>
                <R.ButtonGroup>
                    <button onClick={handleRestart}>다시하기</button>
                </R.ButtonGroup>
            </R.Main>
        </R.Container>
    );
}

export default Result;
