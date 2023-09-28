interface GeneralButtonProps {
  onClickHandler: () => void;
  buttonText: string;
  styling: string;
}

export const GeneralButton = ({
  onClickHandler,
  buttonText,
  styling,
}: GeneralButtonProps) => {
  return (
    <div>
      <button className={styling} onClick={onClickHandler}>
        {buttonText}
      </button>
    </div>
  );
};
