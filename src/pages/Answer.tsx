import { useEffect, useRef, useState } from "react";
import {
  clearLocalStorage,
  getAnswersFromLocalStorage,
  getQuestionsFromLocalStorage,
} from "../utils/localStorageUtils";
import { isLoggedIn } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import { AnswerHeader } from "../components/AnswerHeader";
import { FlippedPanel } from "../components/FlippedPanel";
import { AnswerButton } from "../components/AnswerButton";

import { AnswerOptions } from "../components/AnswerOptions";

export const Answer = ({ user }: { user: string }) => {
  const [answerIndex, setAnswerIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const question = useRef(getQuestionsFromLocalStorage());
  const userAnswers = useRef(getAnswersFromLocalStorage());

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onXmarkHandler = () => {
    clearLocalStorage(true);
    navigate("/main-menu");
  };

  const onNavigateQuestionHandler = (type: string) => {
    setFlipped(false);
    if (type === "next") {
      setAnswerIndex((prev) => prev + 1);
    } else {
      setAnswerIndex((prev) => prev - 1);
    }
  };

  const onFlippedHandler = () => {
    setFlipped(!flipped);
  };

  const onShowOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center w-[80%] max-w-[800px] m-auto">
      <AnswerHeader
        onXmarkHandler={onXmarkHandler}
        onShowOptionsHandler={onShowOptionsHandler}
        answerIndex={answerIndex}
        showOptions={showOptions}
      ></AnswerHeader>
      <div className="flex flex-col gap-2 w-full">
        <FlippedPanel
          flipped={flipped}
          difficulty={question.current[answerIndex].difficulty}
          question={question.current[answerIndex].question}
          category={question.current[answerIndex].category}
          correctAnswer={question.current[answerIndex].correct_answer as string}
          onFlippedHandler={onFlippedHandler}
        ></FlippedPanel>
        {showOptions && (
          <AnswerOptions
            options={question.current[answerIndex].answers}
            userAnswer={userAnswers.current[answerIndex]}
          ></AnswerOptions>
        )}
      </div>
      <div className="flex w-full justify-between">
        <AnswerButton
          answerIndex={answerIndex}
          onFlippedHandler={onFlippedHandler}
          onNavigateQuestionHandler={onNavigateQuestionHandler}
        ></AnswerButton>
      </div>
    </div>
  );
};
