import { QuestionPanel } from "./QuestionPanel";

interface FlippedPanelProps {
  onFlippedHandler: () => void;
  question: string;
  difficulty: string;
  category: string;
  correctAnswer: string;
  flipped: boolean;
}

export const FlippedPanel = ({
  onFlippedHandler,
  question,
  category,
  difficulty,
  correctAnswer,
  flipped,
}: FlippedPanelProps) => {
  return (
    <div
      className={`[perspective: 1000px] hover:cursor-pointer`}
      onClick={onFlippedHandler}
    >
      <div
        className={`duration-[1100ms] transition-transform [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(360deg)]" : ""
        } `}
      >
        <QuestionPanel
          difficulty={difficulty}
          text={flipped ? `Answer:  ${correctAnswer}` : question}
          category={category}
        ></QuestionPanel>
      </div>
    </div>
  );
};
