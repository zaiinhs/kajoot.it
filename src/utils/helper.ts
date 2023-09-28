import axios from "axios";
import type * as I from "./interfaces";
import { type NavigateFunction } from "react-router";
import he from "he";

export const colors = ["cyan", "yellow", "red", "green"];

export const fetchQuestion = async () => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=10");
    let datas = await response.data.results;
    datas = datas.map((data: I.QuizQuestion) => {
      const shuffledAns = shuffleArray([
        ...data.incorrect_answers,
        data.correct_answer,
      ]);
      return { ...data, answers: shuffledAns };
    });
    return datas;
  } catch (error) {
    console.log("Error Message :", error);
  }
};

export const isLoggedIn = (user: string, navigate: NavigateFunction) => {
  if (user === "") {
    navigate("/");
  }
};

export const displayCountDown = (countDown: number) => {
  if (countDown === 60) {
    return "01:00";
  } else if (countDown > 9) {
    return `00:${countDown}`;
  } else {
    return `00:0${countDown}`;
  }
};

export const toCamelCase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1, text.length);
};

export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.4);
};

export const optionsColorVariants = {
  cyan: "bg-cyan-500 hover:bg-cyan-600 border-b-8 border-b-cyan-700",
  yellow: "bg-yellow-500 hover:bg-yellow-600 border-b-8 border-b-yellow-700",
  red: "bg-red-500 hover:bg-red-600 border-b-8 border-b-red-700",
  green: "bg-green-500 hover:bg-green-600 border-b-8 border-b-green-700",
};

export const difficultyColorVariants = {
  easy: "text-[#00cb84]",
  medium: "text-[#FFB400]",
  hard: "text-[#FA1717]",
};

export const resetQuizResult = (
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>
) => {
  setQuizResult({
    correct: 0,
    wrong: 0,
  });
};

export const getOptionsColor = (color: keyof typeof optionsColorVariants) => {
  return optionsColorVariants[color];
};

export const getDifficultyColor = (
  color: keyof typeof difficultyColorVariants
) => {
  return difficultyColorVariants[color];
};

export const decode = (text: string) => he.decode(text);
