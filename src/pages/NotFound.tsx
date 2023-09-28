import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/main-menu");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-12 text-center">
      <h1 className="text-2xl font-bold">404 Not Found :(</h1>
      <button
        className=" bg-[#2D3346] rounded-xl  rounded-b-xl font-bold active:translate-y-1 w-fit
        py-3 px-6"
        onClick={onClickHandler}
      >
        Back To Main Menu
      </button>
    </div>
  );
};
