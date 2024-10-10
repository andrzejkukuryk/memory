import { MemoryState } from "../models/memoryState";

export const timeSlice = (set: any, get: any) => ({
  time: 0,
  isRunning: false,
  incrementTime: () => set((state: MemoryState) => ({ time: state.time + 1 })),
  startStopTime: () =>
    set((state: MemoryState) => ({ isRunning: !state.isRunning })),
  resetTime: () => set({ time: 0, isRunning: false }),
});
