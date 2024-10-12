import { useMemoryStore } from "../../store";
import { findBestResultIndex } from "../../utils/bestResultIndex";
import { formatDateToString } from "../../utils/formatDateToString";
import { formatTime } from "../../utils/formatTime";

export const ResultsHard = () => {
  const { resultsHard } = useMemoryStore();

  const bestResultIndex =
    resultsHard.length > 0 ? findBestResultIndex(resultsHard) : 0;

  const lastResult =
    resultsHard[0] != null
      ? `moves: ${resultsHard[bestResultIndex].moves} time: ${formatTime(
          resultsHard[bestResultIndex].time
        )} date: ${formatDateToString(resultsHard[bestResultIndex].date)}`
      : "not played yet";

  return <div>best result hard: {lastResult} </div>;
};
