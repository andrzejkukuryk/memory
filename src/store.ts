import { create } from 'zustand';
import { Value } from "./constants/values.enum";
import { values } from "./data/values";
import { getRandomPairs } from "./utils/randomCards.ts";
import { Level } from "./constants/levels.enum";

interface MemoryState {
  count: number;
  level: Level;
  cards: Value[];
  currentPair: Value[];
  currentIndex: number[];
  matchedValues: string[];
  history: [number, number][];
  resetComponents: boolean;
  increment: () => void;
  randomBoard: () => void;
  setLevel: (newLevel: Level) => void;
  reset: () => void;
  checkCard: (value: Value, index: number) => void;
}

const useMemoryStore = create<MemoryState>((set: any, get: any) => ({
  count: 0,
  level: Level.easy,
  cards: getRandomPairs(values, 3),
  currentPair: [],
  currentIndex: [],
  matchedValues: [],
  history: [],
  resetComponents: false,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  randomBoard: () =>
    set((state: MemoryState) => ({
      cards: getRandomPairs(values, state.level),
    })),
  setLevel: (newLevel: Level) =>
    set((state: MemoryState) => ({
      level: newLevel,
      cards: getRandomPairs(values, newLevel),
    })),
  reset: () =>
    set({
      count: 0,
      currentPair: [],
      currentIndex: [],
      matchedValues: [],
      history: [],
      resetComponents: true,
    }),
  checkCard: (value, index) => {
    const { currentPair, currentIndex, matchedValues, history } = get();
    set({ currentIndex: [], resetComponents: false });
    if (currentPair.length === 0) {
      set({ currentPair: [value], currentIndex: [index] });
    } else if (currentPair.length === 1) {
      set({
        currentPair: [...currentPair, value],
        currentIndex: [...currentIndex, index],
      });
      if (get().currentPair[0] === get().currentPair[1]) {
        set({
          matchedValues: [...matchedValues, value],
        });
      }
      set({ history: [...history, [get().currentIndex[0], index]] }); // TODO
      set({ currentPair: [] });
    }
    console.log(
      // get().currentPair,
      // get().matchedValues,
      // get().currentIndex,
      get().history
    );
  },
}));


export default useMemoryStore;
