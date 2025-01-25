import styled from "styled-components";

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #fffbe6;
`;
export const TopMessage = styled.h1`
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  background-color: #333;
  border-radius: 5rem;
  padding: 5px 15px;
  margin-top: 2.5rem;
`;
export const MainImage = styled.img`
  width: 100%;
  margin-top: 4rem;
`;

export const LogoImage = styled.div`
  width: 100px;
  height: 100px;
`;

export const StartBox = styled.div`
  width: 90%;
  text-align: center;
  margin-top: 5rem;
`;
export const Input = styled.input`
  width: 90%;
  padding: 15px;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
`;
export const StartButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  color: #fff;
  background-color: rgb(26, 130, 115);
  border: 3px solid #333;
  box-shadow: 3px 3px #454545;
  border-radius: 5rem;
  cursor: pointer;

  //animation: blink 2s infinite;

  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
