import styled from "styled-components";

export const Container = styled.div`
    background-color: #fffbe6;
    text-align: center;
`;

export const Main = styled.main`
    padding: 2rem 20px 3rem;
`;

export const Logo = styled.div`
    display: inline-block;
    margin: 0 auto 10px;
    img {
        width: 3rem;
    }
`;

export const Title = styled.h1`
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 7px;
    font-family: "SOYOMapleBoldTTF";
`;

export const Name = styled.h2`
    font-size: 2rem;
    position: relative;
    display: inline-block;
    z-index: 2;
    font-family: "SOYOMapleBoldTTF";
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

export const Section = styled.div`
    margin: 0 0 20px;
    padding: 2rem 0;
    border-top: 1px solid #ddd;

    strong {
        font-size: 1.2rem;
        display: inline-block;
        margin-bottom: 1rem;
    }
`;
export const Capture = styled.div`
    background: #fffbe6;
    padding: 20px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        margin: 0 7px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background-color: #45a049;
        }
    }
`;
