import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Miscbar } from "../components/Miscbar";
import { Loading } from "../components/Loading";
import { QuizOptions } from "../components/QuizOptions";
import type * as I from "../utils/interfaces";
import { fetchQuestion, isLoggedIn } from "../utils/helper";
import {
  getIndexFromLocalStorage,
  getQuestionsFromLocalStorage,
} from "../utils/localStorageUtils";
import { QuestionPanel } from "../components/QuestionPanel";

interface PlayProps {
  user: string;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

interface DatasProps extends I.QuizQuestion {
  answers: string[];
}

export const Play = ({ user, setQuizResult }: PlayProps) => {
  const [datas, setDatas] = useState<DatasProps[]>(
    getQuestionsFromLocalStorage()
  );
  const [questionIndex, setQuestionIndex] = useState<number>(
    getIndexFromLocalStorage()
  );
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
    if (datas.length === 0) {
      void (async () => {
        const responseData = await fetchQuestion();
        setDatas(responseData);
        localStorage.setItem("questions", JSON.stringify(responseData));
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEnded = () => {
    if (questionIndex === 9) {
      navigate("/result");
    }
  };

  const isTimeOut = () => {
    localStorage.removeItem("countdown");
    navigate("/result");
  };

  return (
    <>
      {datas.length === 0 ? (
        <Loading></Loading>
      ) : (
        <div>
          <Navbar />
          <div className="flex flex-col gap-4 w-[80%] max-w-[800px] m-auto">
            <Miscbar
              questionIndex={questionIndex}
              isTimeOut={isTimeOut}
            ></Miscbar>
            <QuestionPanel
              difficulty={datas[questionIndex].difficulty}
              category={datas[questionIndex].category}
              text={datas[questionIndex].question}
            ></QuestionPanel>
          </div>
          <QuizOptions
            {...datas[questionIndex]}
            setQuestionIndex={setQuestionIndex}
            setQuizResult={setQuizResult}
            isEnded={isEnded}
          ></QuizOptions>
        </div>
      )}
    </>
  );
};
