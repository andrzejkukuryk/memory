import { create } from 'zustand';

interface MemoryState {
  count: number;
  cards: string[];
  currentPair: string[];
  checkCard: (value: string) => void;
  increment: () => void;
  reset: () => void;
}

const useMemoryStore = create<MemoryState>((set: any) => ({
  count: 0,
  cards: ["A", "B", "B", "A"],
  currentPair: [],
  checkCard(value) {
      if(this.currentPair.length === 0){
this.currentPair.push(value)
      }
      if(this.currentPair.length === 1){
        this.currentPair.push(value)
      }
      console.log(this.currentPair)
  },
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  reset: () => set((state: any) => ({ count: state.count = 0 })),
}));

export default useMemoryStore;
