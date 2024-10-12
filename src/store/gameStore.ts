import { Value } from "../constants/values.enum";
import { values } from "../data/values";
import { MemoryState } from "../models/memoryState";
import { getRandomPairs } from "../utils/randomCards";

export const gameSlice = (set: any, get: any) => ({
  movesCounter: 0,
  cards: getRandomPairs(values, 4),
  currentPair: [],
  currentIndex: [],
  matchedValues: [],
  history: [],
  resetComponents: false,
  increment: () =>
    set((state: MemoryState) => ({ movesCounter: state.movesCounter + 1 })),
  randomBoard: () =>
    set((state: MemoryState) => ({
      cards: getRandomPairs(values, state.level),
    })),
  resetGame: () =>
    set({
      movesCounter: 0,
      currentPair: [],
      currentIndex: [],
      matchedValues: [],
      history: [],
      resetComponents: true,
    }),
  checkCard: (value: Value, index: number) => {
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

        if (get().matchedValues.length === get().level) {
          set({ isRunning: false });
        }
      }

      set({ history: [...history, [get().currentIndex[0], index]] });
      set({ currentPair: [] });
    }
  },
});
