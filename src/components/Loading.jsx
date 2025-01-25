import React from "react";

import styled from "styled-components";

const Loading = () => {
  return <LoadingContainer />;
};

export default Loading;

const LoadingContainer = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid rgb(26, 130, 115);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;
