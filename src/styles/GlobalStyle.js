import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  body {
    background-color:  #fffbe6;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: 'YOnepickTTF-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/YOnepickTTF-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  body {
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular', sans-serif;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
