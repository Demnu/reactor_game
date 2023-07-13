import { create } from "zustand";

// Define a state type
type TankState = {
  max: number;
  fill: number;
  bar: number;
};
type TanksState = {
  tank1: TankState;
  tank2: TankState;
  tank3: TankState;
  tank4: TankState;
};

// Use the defined state type in your Zustand store
const useTanksStore = create<TanksState>((set) => ({
  tank1: { max: 2, fill: 2, bar: 0 },
  tank2: { max: 4, fill: 2, bar: 0 },
  tank3: { max: 6, fill: 2, bar: 0 },
  tank4: { max: 8, fill: 2, bar: 0 },
}));

export default useTanksStore;
