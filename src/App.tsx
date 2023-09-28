import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Play } from "./pages/Play";
import { Result } from "./pages/Result";
import Menu from "./pages/MainMenu";
import type * as I from "./utils/interfaces";
import {
  getResultFromLocalStorage,
  getUserFromLocalStorage,
} from "./utils/localStorageUtils";
import { NotFound } from "./pages/NotFound";
import { NavbarContext } from "./utils/Context";
import { Answer } from "./pages/Answer";

export default function App() {
  const [user, setUser] = useState<string>(() => getUserFromLocalStorage());
  const [quizResult, setQuizResult] = useState<I.QuizResultProps>(
    getResultFromLocalStorage()
  );

  return (
    <NavbarContext.Provider value={{ user, setUser, setQuizResult }}>
      <div className="bg-[#31dd06] h-screen text-white">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                user={user}
                setUser={setUser}
                setQuizResult={setQuizResult}
              ></Login>
            }
          ></Route>

          <Route
            path="/play"
            element={<Play user={user} setQuizResult={setQuizResult}></Play>}
          ></Route>
          <Route
            path="/result"
            element={
              <Result
                user={user}
                quizResult={quizResult}
                setQuizResult={setQuizResult}
              ></Result>
            }
          ></Route>
          <Route path="/answer" element={<Answer user={user}></Answer>}></Route>
          <Route
            path="/main-menu"
            element={<Menu user={user} setQuizResult={setQuizResult}></Menu>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </NavbarContext.Provider>
  );
}
