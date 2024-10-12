import { LsData } from "../models/lsData";
import { Result } from "../models/result";

const emptyLsData: LsData = {
  easy: [],
  normal: [],
  hard: [],
};

export const resultSlice = (set: any, get: any) => ({
  resultsEasy: JSON.parse(
    localStorage.getItem("ak_memory") || JSON.stringify(emptyLsData)
  ).easy,
  resultsNormal: JSON.parse(
    localStorage.getItem("ak_memory") || JSON.stringify(emptyLsData)
  ).normal,
  resultsHard: JSON.parse(
    localStorage.getItem("ak_memory") || JSON.stringify(emptyLsData)
  ).hard,
  addEasy: (newResult: Result) => {
    const { resultsEasy } = get();
    set({ resultsEasy: [newResult, ...resultsEasy ] });
  },
  addNormal: (newResult: Result) => {
    const { resultsNormal } = get();
    set({ resultsNormal: [newResult, ...resultsNormal] });
  },
  addHard: (newResult: Result) => {
    const { resultsHard } = get();
    set({ resultsHard: [newResult, ...resultsHard] });
  },
  setLs: () => {
    const { resultsEasy, resultsNormal, resultsHard } = get();
    localStorage.setItem(
      "ak_memory",
      JSON.stringify({
        easy: resultsEasy,
        normal: resultsNormal,
        hard: resultsHard,
      })
    );
  },
});
