import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../utils/localStorageUtils";
import { resetQuizResult } from "../utils/helper";
import { NavbarContext } from "../utils/Context";

export const Navbar = () => {
  const { user, setUser, setQuizResult } = useContext(NavbarContext);
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    clearLocalStorage();
    setUser("");
    navigate("/");
    resetQuizResult(setQuizResult);
  };

  return (
    <div className="w-full p-4 px-0 bg-white font-bold">
      <div className="flex justify-between items-center w-[90%] m-auto">
        <h2 className="text-[#2d3346] lg:text-xl">Hai, {user}</h2>
        <button
          className="px-3 py-1 bg-red-600 rounded-lg"
          onClick={onLogoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
