import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { resetQuizResult } from "../utils/helper";
import { clearLocalStorage } from "../utils/localStorageUtils";
import type * as I from "../utils/interfaces";

export default function Login({ user, setUser, setQuizResult }: I.NavbarProps) {
  const userInput = useRef<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== "") {
      navigate("/main-menu");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    userInput.current = e.target.value;
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearLocalStorage();
    setUser(userInput.current);
    resetQuizResult(setQuizResult);
    localStorage.setItem("user", userInput.current);
    navigate("/main-menu");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold mb-8 text-4xl text-white">
        kajoot<span className="text-[#2d3346]">.it</span>
      </h1>
      <form
        className="flex flex-col bg-[#2d3346] gap-6 text-center px-6 py-9 rounded-lg w-[70%] max-w-[300px]"
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <input
          className="rounded-lg bg-[#eaeaea] text-center text-black px-2 py-2 text-xs w-full "
          type="text"
          onChange={(e) => {
            onChangeHandler(e);
          }}
          placeholder="Tulis nama kamu"
          required
        />
        <button className="font-bold bg-[#21b851] rounded-md py-1 w-full">
          Login
        </button>
      </form>

      <p>
        Build with ❤ by <strong>@zaiinhs.</strong>
      </p>
    </div>
  );
}
