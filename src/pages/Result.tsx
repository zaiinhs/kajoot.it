import React, { useEffect } from "react";
import type * as I from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../utils/localStorageUtils";
import { resetQuizResult } from "../utils/helper";
import { GeneralButton } from "../components/GeneralButton";

interface ResultComponentProps {
  user: string;
  quizResult: I.QuizResultProps;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

export const Result = ({
  user,
  quizResult,
  setQuizResult,
}: ResultComponentProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoggedIn = () => {
    if (user === "") {
      navigate("/");
    }
  };

  const onButtonHandler = (clicked: string) => {
    resetQuizResult(setQuizResult);
    // const currentScore = {
    //   ...quizResult,
    //   user,
    //   score: quizResult.correct * 10,
    //   date: generateDate(),
    // };

    // let highScoreHistory = getHighScoreFromLocalStorage();
    // highScoreHistory = [...highScoreHistory, currentScore];
    // localStorage.setItem("highscore", JSON.stringify(highScoreHistory));
    if (clicked === "see the answer") {
      navigate("/answer");
      return;
    }
    clearLocalStorage(true);
    clicked === "play again" ? navigate("/play") : navigate("/main-menu");
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-[#13192A] gap-6 text-center px-6 py-9 rounded-lg w-[70%] max-w-[300px]">
          <h1 className="text-xl font-bold">
            Score: {quizResult.correct * 10}/100
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-300">{`Answered ${
              quizResult.correct + quizResult.wrong
            }`}</h2>
            <h2 className="text-[#00C8B4]">{`Correct ${quizResult.correct}`}</h2>
            <h2 className="text-red-500">{`Wrong ${quizResult.wrong}`}</h2>
          </div>
          <GeneralButton
            styling="font-bold bg-[#21b851] rounded-md w-full py-2"
            onClickHandler={() => {
              onButtonHandler("play again");
            }}
            buttonText="Play Again"
          ></GeneralButton>
          <GeneralButton
            styling="font-bold bg-[#21b851] rounded-md w-full py-2"
            onClickHandler={() => {
              onButtonHandler("see the answer");
            }}
            buttonText="See the Answer"
          ></GeneralButton>
          <GeneralButton
            styling="font-bold bg-[#21b851] rounded-md w-full py-2"
            onClickHandler={() => {
              onButtonHandler("main menu");
            }}
            buttonText="Go to Main Menu"
          ></GeneralButton>
        </div>
      </div>
    </>
  );
};
