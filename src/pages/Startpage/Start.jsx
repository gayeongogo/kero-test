import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoImg from "../../assets/images/kero_logo.gif";
import mainImg from "../../assets/images/main_image.png";

import * as S from "./Start.styled";

function Start({ setName }) {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => setInput(e.target.value);

    const handleStart = () => {
        if (input) {
            setName(input);
            navigate("/tests");
        } else {
            alert("이름쓰라");
        }
    };

    return (
        <S.StartContainer>
            <S.TopMessage>올해 당신의 행운의 개구리는?</S.TopMessage>
            <S.MainImage src={mainImg} alt="메인이미지" />
            <S.LogoImage>
                <img src={logoImg} alt="로고이미지" />
            </S.LogoImage>

            <S.StartBox>
                <S.Input
                    onChange={handleChange}
                    type="text"
                    value={input}
                    placeholder="이름을 입력하세요"
                />
                <S.StartButton onClick={handleStart}>시작하기</S.StartButton>
            </S.StartBox>
        </S.StartContainer>
    );
}

export default Start;
