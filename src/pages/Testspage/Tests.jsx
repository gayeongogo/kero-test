import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading.jsx";

import * as T from "./Text.styled.js";

function Tests({ questions, calculateType }) {
    const navigate = useNavigate();

    const [isLoding, setIsLoading] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState({
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    });

    const [selectedType, setSelectedType] = useState([]); // 선택한 유형

    const currentQ = questions[currentIndex];

    const handleAnswer = (type) => {
        if (isLoding) return;
        // 선택한 타입 유형에 1점 추가
        setScore((prevScore) => ({
            ...prevScore,
            [type]: prevScore[type] + 1,
        }));

        setSelectedType((prev) => {
            const updated = [...prev];
            updated[currentIndex] = type; // 현재 질문 인덱스에 선택한 타입 저장
            return updated;
        });

        // 다음 인덱스
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === 0) {
            navigate("/start");
        } else if (currentIndex === questions.length - 1) {
            setIsLoading(true);
            setTimeout(() => {
                calculateType(score); // 점수 계산 결과
                navigate("/result");
            }, 1000);
        }
    };

    // 이전 버튼
    const handlePrev = () => {
        // 이전 질문에서 선택한 타입
        const previous = selectedType[currentIndex - 1];

        // 이전에 선택한 타입에서 1점 빼기
        if (previous) {
            setScore((prevScore) => ({
                ...prevScore,
                [previous]: prevScore[previous] - 1,
            }));

            setSelectedType((prev) => {
                const updated = [...prev];
                updated[currentIndex - 1] = ""; // 이전 질문 선택 기록 무효
                return updated;
            });

            setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 0) {
            navigate("/");
        }
    };

    return (
        <T.TestContainer>
            <T.PrevButton onClick={handlePrev}>이전으로</T.PrevButton>
            <T.QuestionContainer>
                <T.PageInfo>{currentIndex + 1}/12</T.PageInfo>
                <T.QuestionText>{currentQ.question}</T.QuestionText>
                <T.OptionButton
                    onClick={() => handleAnswer(currentQ.options[0].type)}
                >
                    {currentQ.options[0].text}
                </T.OptionButton>
                <T.OptionButton
                    onClick={() => handleAnswer(currentQ.options[1].type)}
                >
                    {currentQ.options[1].text}
                </T.OptionButton>
            </T.QuestionContainer>
            {isLoding && <Loading />}
        </T.TestContainer>
    );
}

export default Tests;
