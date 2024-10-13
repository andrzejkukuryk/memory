import { Result } from "../models/result";

export function findBestResult(results: Result[]): Result | null {
  if (results.length === 0) return null;

  return results.reduce((bestResult, currentResult) => {
    if (currentResult.moves < bestResult.moves) {
      return currentResult;
    } else if (currentResult.moves === bestResult.moves) {
      if (currentResult.time < bestResult.time) {
        return currentResult;
      } else if (currentResult.time === bestResult.time) {
        return new Date(currentResult.date) < new Date(bestResult.date)
          ? currentResult
          : bestResult;
      }
    }
    return bestResult;
  });
}
