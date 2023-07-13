import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import useGlobalStore from "../globalStore/GlobalStore";
import { useEffect } from "react";
import useTanksStore from "../globalStore/TanksStore";

export default function Game() {
  const { time, incrementTime } = useGlobalStore();
  const { tank1, tank2, tank3, tank4 } = useTanksStore();

  useEffect(() => {
    const interval = setInterval(() => {
      incrementTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    tank1.setFill(time);
  }, [time]);

  return (
    <>
      <div className=" flex justify-center">
        {/* <Link className="w-full max-w-2xl" to="/home">
          <button
            type="button"
            className="inline-block rounded bg-blue-600 hover:bg-blue-500 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white"
          >
            {"<"} Back
          </button>
        </Link> */}
        <div className=" text-3xl">Time: {time}</div>
      </div>

      <div className=" mb-10"></div>
      <Dashboard />
    </>
  );
}
