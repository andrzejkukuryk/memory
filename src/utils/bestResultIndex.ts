import { Result } from "../models/result";

export function findBestResultIndex(results: Result[]): number {
  return results.reduce((bestIndex, currentResult, currentIndex, array) => {
    const bestResult = array[bestIndex];

    if (currentResult.moves < bestResult.moves) {
      return currentIndex;
    }

    if (
      currentResult.moves === bestResult.moves &&
      currentResult.time < bestResult.time
    ) {
      return currentIndex;
    }
    if (
      currentResult.time === bestResult.time &&
      new Date(currentResult.date) < new Date(bestResult.date)
    ) {
      return currentIndex;
    }

    return bestIndex;
  }, 0);
}
