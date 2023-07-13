import { Link } from "react-router-dom";
import useGlobalStore from "../globalStore/GlobalStore";

export default function Home() {
  return (
    <div className="">
      <h1 className=" text-center text-3xl mt-2 mb-6">
        Reactor Control Training Game
      </h1>
      <div className=" flex justify-center">
        <Link className="w-full max-w-2xl" to="/game">
          <button
            type="button"
            className="inline-block rounded w-full max-w-2xl bg-red-600 hover:bg-red-500 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white"
          >
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
}
