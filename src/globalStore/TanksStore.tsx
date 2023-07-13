import { create } from "zustand";

type Tank = {
  max: number;
  fill: number;
  bar: number;
  setMax: (num: number) => void;
  setFill: (num: number) => void;
  setBar: (num: number) => void;
};

type TanksState = {
  tank1: Tank;
  tank2: Tank;
  tank3: Tank;
  tank4: Tank;
};

const useTanksStore = create<TanksState>((set) => {
  const createTank = (id: keyof TanksState): Tank => ({
    max: 2,
    fill: 2,
    bar: 0,
    setMax: (num: number) =>
      set((state) => ({ ...state, [id]: { ...state[id], max: num } })),
    setFill: (num: number) =>
      set((state) => ({ ...state, [id]: { ...state[id], fill: num } })),
    setBar: (num: number) =>
      set((state) => ({ ...state, [id]: { ...state[id], bar: num } })),
  });

  return {
    tank1: createTank("tank1"),
    tank2: createTank("tank2"),
    tank3: createTank("tank3"),
    tank4: createTank("tank4"),
  };
});

export default useTanksStore;
