import { Level } from "../constants/levels.enum";
import { Value } from "../constants/values.enum";
import { Result } from "./result";

export interface MemoryState {
  movesCounter: number;
  level: Level;
  cards: Value[];
  currentPair: Value[];
  currentIndex: number[];
  matchedValues: string[];
  resetComponents: boolean;
  time: number;
  isRunning: boolean;
  resultsEasy: Result[];
  resultsNormal: Result[];
  resultsHard: Result[];
  incrementTime: () => void;
  startStopTime: () => void;
  increment: () => void;
  randomBoard: () => void;
  setLevel: (newLevel: Level) => void;
  resetGame: () => void;
  resetTime: () => void;
  checkCard: (value: Value, index: number) => void;
  addEasy: (newResult: Result) => void;
  addNormal: (newResult: Result) => void;
  addHard: (newResult: Result) => void;
  setLs: () => void;
}
