import { getOptionsColor, type optionsColorVariants } from "../utils/helper";
import { decode } from "../utils/helper";

interface OptionProps {
  color: keyof typeof optionsColorVariants;
  text: string;
  CheckAnswer: (answer: string) => void;
}

export const Option = ({ color, text, CheckAnswer }: OptionProps) => {
  return (
    <>
      <button
        className={`flex text-center items-center ${getOptionsColor(
          color
        )} rounded-xl rounded-b-xl px-3 active:translate-y-1 w-full`}
        onClick={() => {
          CheckAnswer(text);
        }}
      >
        <h3 className="w-full font-bold">{decode(text)}</h3>
      </button>
    </>
  );
};
