import Tank from "../components/tank/Tanks";
import useTanksStore from "../globalStore/TanksStore";

export default function Dashboard() {
  const { tank1, tank2, tank3, tank4 } = useTanksStore();
  return (
    <div className="flex justify-evenly">
      <Tank max={tank1.max} fill={tank1.fill} />
      <Tank max={tank2.max} fill={tank2.fill} />
      <Tank max={tank3.max} fill={tank3.fill} />
      <Tank max={tank4.max} fill={tank4.fill} />
    </div>
  );
}
