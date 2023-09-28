import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faInfo } from "@fortawesome/free-solid-svg-icons";

interface AnswerHeaderProps {
  onXmarkHandler: () => void;
  answerIndex: number;
  onShowOptionsHandler: () => void;
  showOptions: boolean;
}

export const AnswerHeader = ({
  onXmarkHandler,
  answerIndex,
  onShowOptionsHandler,
  showOptions,
}: AnswerHeaderProps) => {
  return (
    <div className="flex absolute top-0 right-0 p-4 w-full justify-between z-4">
      <div className="flex gap-4 text-[#2d3346] ">
        <button
          className="p-2 px-4 bg-white w-fit rounded-md"
          onClick={onXmarkHandler}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        <h2 className="p-2 bg-white w-fit rounded-md">{answerIndex + 1}/10</h2>
        <h2 className="relative p-2 px-5 bg-white w-fit rounded-md ">
          <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
          <span className="absolute text-center top-12 left-[50%] translate-x-[-50%] w-[400%] p-2 bg-white rounded-md  scale-0  group-hover:scale-100">
            The <span className="font-bold text-yellow-500">orange</span>{" "}
            options is your answers
          </span>
        </h2>
      </div>
      <button
        className="text-center text-[#2D3346] bg-white rounded-lg py-2 px-4 text-[16px]"
        onClick={onShowOptionsHandler}
      >
        {showOptions ? "Hide Options" : "Show Options"}
      </button>
    </div>
  );
};
