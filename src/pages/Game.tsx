import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Game() {
  return (
    <>
      <Link className="w-full max-w-2xl" to="/home">
        <button
          type="button"
          className="inline-block rounded bg-blue-600 hover:bg-blue-500 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white"
        >
          {"<"} Back
        </button>
      </Link>
      <div className=" mb-10"></div>
      <Dashboard />
    </>
  );
}
