import { create } from "zustand";

// Define a state type
type GlobalState = {
  time: number;
  incrementTime: () => void;
};

// Use the defined state type in your Zustand store
const useGlobalStore = create<GlobalState>((set) => ({
  time: 0,
  incrementTime: () => set((state) => ({ time: state.time + 1 })),
}));

export default useGlobalStore;
