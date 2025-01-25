import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Start from "./pages/Startpage/Start";
import Tests from "./pages/Testspage/Tests";
import Result from "./pages/Resultpage/Result";
import Header from "./components/Header";

import questions from "../src/data/questions.json";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [mbti, setMbti] = useState(localStorage.getItem("mbti") || "");

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("mbti", mbti);
  }, [name, mbti]);

  const calculateType = (score) => {
    const resultMbti =
      (score.E > score.I ? "E" : "I") +
      (score.N > score.S ? "N" : "S") +
      (score.T > score.F ? "T" : "F") +
      (score.J > score.P ? "J" : "P");
    setMbti(resultMbti);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index path="/" element={<Start setName={setName} />}></Route>
        <Route
          path="/tests"
          element={
            <Tests
              name={name}
              questions={questions}
              calculateType={calculateType}
            />
          }
        ></Route>
        <Route
          path="/result"
          element={
            <Result
              name={name}
              mbti={mbti}
              setName={setName}
              setMbti={setMbti}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
