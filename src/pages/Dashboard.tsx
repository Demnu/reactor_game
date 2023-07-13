import Tank from "../components/tank/Tanks";
import useGlobalStore from "../globalStore/GlobalStore";

export default function Dashboard() {
  const { bears, increasePopulation } = useGlobalStore();

  return (
    <div className="flex justify-evenly">
      <button onClick={increasePopulation}>increase bears</button>
      {bears}
      <Tank max={2} fill={2} />
      <Tank max={4} fill={2} />
      <Tank max={6} fill={2} />
      <Tank max={8} fill={2} />
    </div>
  );
}
