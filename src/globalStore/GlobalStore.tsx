import { create } from "zustand";

// Define a state type
type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

// Use the defined state type in your Zustand store
const useGlobalStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useGlobalStore;
