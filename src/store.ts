import { create } from 'zustand';
import { Value } from "./constants/values.enum";

interface MemoryState {
  count: number;
  cards: string[];
  currentPair: string[];
  currentIndex: number[];
  matchedValues: string[];
  increment: () => void;
  reset: () => void;
  checkCard: (value: string, index: number) => void;
}

const useMemoryStore = create<MemoryState>((set: any, get: any) => ({
  count: 0,
  cards: [Value.fusilli, Value.penne, Value.fusilli, Value.penne],
  currentPair: [],
  currentIndex: [],
  matchedValues: [],
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  reset: () => set((state: any) => ({ count: (state.count = 0) })),
  checkCard: (value, index) => {
    const { currentPair, currentIndex, matchedValues } = get();
    set({ currentIndex: [] });
    if (currentPair.length === 0) {
      set({ currentPair: [value] });
      set({ currentIndex: [index] });
    } else if (currentPair.length === 1) {
      set({ currentPair: [...currentPair, value] });
      set({ currentIndex: [...currentIndex, index] });
      set({});
      if (get().currentPair[0] === get().currentPair[1]) {
        set({ matchedValues: [...matchedValues, value] });
      }
      set({ currentPair: [] });
    }
    console.log(get().currentPair, get().matchedValues, get().currentIndex);
  },
}));


export default useMemoryStore;
