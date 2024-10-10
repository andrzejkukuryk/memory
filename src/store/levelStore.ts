import { Level } from "../constants/levels.enum";
import { values } from "../data/values";
import { getRandomPairs } from "../utils/randomCards";

export const levelSlice = (set: any) => ({
  level: Level.easy,
  setLevel: (newLevel: Level) =>
    set({
      level: newLevel,
      cards: getRandomPairs(values, newLevel),
    }),
});
