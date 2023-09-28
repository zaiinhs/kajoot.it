import React from "react";
import type * as I from "../utils/interfaces";
import { getAnswersFromLocalStorage } from "../utils/localStorageUtils";
import { Option } from "./Option";

interface QuizOptionsProps extends I.QuizAnswers {
  answers: string[];
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
  isEnded: () => void;
}
export const QuizOptions = ({
  answers,
  correct_answer,
  setQuestionIndex,
  setQuizResult,
  isEnded,
}: QuizOptionsProps) => {
  const CheckAnswer = (answer: string) => {
    const storageAnswers = getAnswersFromLocalStorage();
    localStorage.setItem(
      "answers",
      JSON.stringify([...storageAnswers, answer])
    );
    if (answer === correct_answer) {
      setQuizResult((prev) => {
        const resultData = { ...prev, correct: prev.correct + 1 };
        localStorage.setItem("result", JSON.stringify(resultData));
        return resultData;
      });
    } else {
      setQuizResult((prev) => {
        const resultData = { ...prev, wrong: prev.wrong + 1 };
        localStorage.setItem("result", JSON.stringify(resultData));
        return resultData;
      });
    }
    setQuestionIndex((prev: number) => {
      localStorage.setItem("index", `${prev + 1}`);
      return prev + 1;
    });
    isEnded();
  };

  return (
    <div
      className={`absolute bottom-4 xl:bottom-8 left-0 right-0 grid grid-cols-2 xl:flex w-[90%] h-[30vh] max-h-[300px] m-auto gap-3`}
    >
      {answers.length === 2 ? (
        <>
          <Option
            color={"cyan"}
            text={answers[0]}
            CheckAnswer={CheckAnswer}
          ></Option>
          <Option
            color={"yellow"}
            text={answers[1]}
            CheckAnswer={CheckAnswer}
          ></Option>
        </>
      ) : (
        <>
          <Option
            color={"cyan"}
            text={answers[0]}
            CheckAnswer={CheckAnswer}
          ></Option>
          <Option
            color={"yellow"}
            text={answers[1]}
            CheckAnswer={CheckAnswer}
          ></Option>
          <Option
            color={"red"}
            text={answers[2]}
            CheckAnswer={CheckAnswer}
          ></Option>
          <Option
            color={"green"}
            text={answers[3]}
            CheckAnswer={CheckAnswer}
          ></Option>
        </>
      )}
    </div>
  );
};
