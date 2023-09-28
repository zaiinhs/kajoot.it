import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface AnswerButtonProps {
  answerIndex: number;
  onNavigateQuestionHandler: (type: string) => void;
  onFlippedHandler: () => void;
}

export const AnswerButton = ({
  answerIndex,
  onNavigateQuestionHandler,
  onFlippedHandler,
}: AnswerButtonProps) => {
  return (
    <>
      <button
        className="flex text-sm md:text-base items-center gap-2 p-2 text-slate-700 bg-white disabled:bg-slate-300  disabled:text-slate-500  rounded-md active:translate-y-1 border-b-4 border-slate-500 rounded-b-lg"
        onClick={() => {
          onNavigateQuestionHandler("back");
        }}
        disabled={answerIndex === 0}
      >
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>Back
      </button>
      <button
        className="flex text-sm md:text-base items-center gap-2 p-2 text-slate-700 bg-white rounded-md border-b-4 border-slate-500 rounded-b-lg active:translate-y-1 "
        onClick={onFlippedHandler}
      >
        Flip the Panel
      </button>
      <button
        className="flex text-sm md:text-base items-center gap-2 px-2 py-1 text-slate-700 bg-white disabled:bg-slate-300  disabled:text-slate-50 rounded-md active:translate-y-1 border-b-4 border-slate-500 rounded-b-lg"
        onClick={() => {
          onNavigateQuestionHandler("next");
        }}
        disabled={answerIndex === 9}
      >
        Next<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </>
  );
};
