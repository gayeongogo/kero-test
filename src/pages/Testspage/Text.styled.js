import styled from "styled-components";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fffbe6;
  padding: 20px;
  box-sizing: border-box;
`;

export const PrevButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: rgb(26, 130, 115);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(26, 130, 115);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const QuestionContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const PageInfo = styled.p`
  font-size: 1rem;
  height: 3rem;
  color: #555;
`;

export const QuestionText = styled.p`
  white-space: pre-line;
  height: 7rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const OptionButton = styled.button`
  white-space: pre-line;
  width: 100%;
  height: 5rem;
  margin: 7px 0;
  padding: 10px 15px;
  font-size: 1rem;
  color: #333;
  background-color: #fefefe;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:click {
    background-color: #ddd;
  }
`;

export const ResultButton = styled.button`
  display: ${({ $show }) => ($show ? "block" : "none")};
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
