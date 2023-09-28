import { decode } from "../utils/helper";

interface AnswerOptionsProps {
  options: string[];
  userAnswer: string;
}

export const AnswerOptions = ({ options, userAnswer }: AnswerOptionsProps) => {
  const alphabet = ["A. ", "B. ", "C. ", "D. "];
  return (
    <div className="grid grid-cols-2 lg:flex justify-between items-center gap-2 px-2 py-3 text-slate-700 bg-white  disabled:bg-slate-500  disabled:text-slate-300  rounded-md">
      {options.map((answer: string, index: number) => (
        <span
          key={`Answer-${index}`}
          className={`font-bold text-center text-xs p-2 md:text-sm w-full ${
            userAnswer === answer ? "text-yellow-500" : ""
          }`}
        >
          {alphabet[index]}
          {decode(answer)}
        </span>
      ))}
    </div>
  );
};
