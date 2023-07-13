interface TankProps {
  max: number;
  fill: number;
}

export default function Tank({ max, fill }: TankProps) {
  return (
    <div className="border border-black uppercase flex flex-col p-12 w-72 items-center">
      <div>Max: {max}</div>
      <div>Fill: {fill}</div>
      <div>Bar:</div>
    </div>
  );
}
