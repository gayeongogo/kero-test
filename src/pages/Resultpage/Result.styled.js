import styled from "styled-components";

export const Container = styled.div`
    background-color: #fffbe6;
    text-align: center;
    @font-face {
        font-family: "SOYOMapleBoldTTF";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleBoldTTF.woff2")
            format("woff2");
        font-weight: 400;
        font-style: normal;
    }

    font-family: "SOYOMapleBoldTTF";
`;
export const Main = styled.main`
    padding: 2rem 20px 3rem;
`;

export const Title = styled.h1`
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 7px;
`;

export const Name = styled.h2`
    font-size: 2rem;
    position: relative;
    display: inline-block;
    z-index: 2;
    &::before {
        position: absolute;
        bottom: -5px;
        left: 0;
        content: "";
        width: 100%;
        height: 13px;
        border-radius: 2px;
        background-color: #ff9100;
        margin: 10px 0;
        z-index: -1;
    }
`;

export const ResultCard = styled.div`
    border-radius: 10px;
    margin: 0 auto;
    width: 90%;
    font-family: "Pretendard-regular";
`;

export const Section = styled.div`
    margin: 20px 0;
    padding: 2rem 0;
    border-top: 1px solid #ddd;

    strong {
        font-size: 1.2rem;
        display: inline-block;
        margin-bottom: 1rem;
    }
`;
export const FrogImage = styled.div`
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
`;
export const Feature = styled.div`
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    margin-bottom: 2rem;
`;
export const Message = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
`;

export const FoodSection = styled.div`
    margin: 20px 0;
    font-size: 1rem;
    color: #555;
`;
export const Match = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;

    div {
        width: 4rem;
        height: 4rem;
        background: #fff;
        padding: 10px;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    }

    p {
        margin-left: 1rem;
    }
`;
export const Food = styled.div`
    margin: 0 auto;
    display: flex; /* Flexbox로 레이아웃 설정 */
    flex-direction: column; /* 세로 방향으로 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    justify-content: center; /* 세로 가운데 정렬 */
    img {
        margin-bottom: 1rem;
        width: 11rem;
        height: 11rem;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 10px;
        border: 1px solid rgb(242, 243, 244);
    }
    p {
        font-size: 15px;
        display: inline-block;
        padding: 7px 1.2rem;
        background-color: #333;
        color: #ededed;
        border-radius: 5rem;
    }
`;

export const ButtonGroup = styled.div`
    margin-top: 30px;

    button {
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 0 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background-color: #45a049;
        }
    }
`;
