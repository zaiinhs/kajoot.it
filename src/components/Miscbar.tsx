import { useEffect, useState } from "react";
import { displayCountDown } from "../utils/helper";
import { getCountdownFromLocalStorage } from "../utils/localStorageUtils";

interface MiscbarProps {
  questionIndex: number;
  isTimeOut: () => void;
}

export const Miscbar = ({ questionIndex, isTimeOut }: MiscbarProps) => {
  const [countdown, setCountdown] = useState<number>(
    getCountdownFromLocalStorage()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountDown) => prevCountDown - 1);
      localStorage.setItem("countdown", `${countdown}`);
      if (countdown === 0) {
        isTimeOut();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="flex justify-between mt-10 w-full text-[#2D3346] bg-white rounded-lg py-2 px-4 lg:py-3 text-[16px] ">
      <h3>{questionIndex + 1}/10</h3>
      <h3>{displayCountDown(countdown)}</h3>
    </div>
  );
};
