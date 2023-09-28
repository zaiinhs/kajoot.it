import React, { useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router";
import { isLoggedIn } from "../utils/helper";
import { getQuestionsFromLocalStorage } from "../utils/localStorageUtils";
import { type QuizResultProps } from "../utils/interfaces";
import { GeneralButton } from "../components/GeneralButton";

interface MainMenuProps {
  user: string;
  setQuizResult: React.Dispatch<React.SetStateAction<QuizResultProps>>;
}

export default function Menu({ user, setQuizResult }: MainMenuProps) {
  const isPausedRef = useRef<boolean>(
    getQuestionsFromLocalStorage().length > 1
  );

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlayHandler = () => {
    setQuizResult({
      correct: 0,
      wrong: 0,
    });
    navigate("/play");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center w-[70%] max-w-[400px]">
        <h1 className="font-bold mb-8 text-4xl text-white text-center">
          kajoot<span className="text-[#2d3346]">.it</span>
        </h1>
        <div className="flex flex-col gap-4 max-w-[300px] m-auto">
          <GeneralButton
            styling="py-3 w-full bg-[#2D3346] rounded-xl rounded-b-xl active:translate-y-1"
            buttonText={isPausedRef.current ? "Resume" : "Play"}
            onClickHandler={onPlayHandler}
          ></GeneralButton>
        </div>
      </div>
    </>
  );
}
