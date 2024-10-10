import { Level } from "../constants/levels.enum";
import { Value } from "../constants/values.enum";

export interface MemoryState {
  movesCounter: number;
  level: Level;
  cards: Value[];
  currentPair: Value[];
  currentIndex: number[];
  matchedValues: string[];
  history: [number, number][];
  resetComponents: boolean;
  time: number;
  isRunning: boolean;
  incrementTime: () => void;
  startStopTime: () => void;
  increment: () => void;
  randomBoard: () => void;
  setLevel: (newLevel: Level) => void;
  resetGame: () => void;
  resetTime: () => void;
  checkCard: (value: Value, index: number) => void;
}
