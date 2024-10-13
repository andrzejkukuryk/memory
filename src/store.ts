import { create } from "zustand";
import { timeSlice } from "./store/timeStore";
import { gameSlice } from "./store/gameStore";
import { levelSlice } from "./store/levelStore";
import { MemoryState } from "./models/memoryState";
import { resultSlice } from "./store/resultStore";

export const useMemoryStore = create<MemoryState>((set, get) => ({
  ...timeSlice(set),
  ...gameSlice(set, get),
  ...levelSlice(set),
  ...resultSlice(set, get),
}));
