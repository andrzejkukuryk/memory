import { useMemoryStore } from "../../store";
import { formatDateToString } from "../../utils/formatDateToString";
import { formatTime } from "../../utils/formatTime";

export const ResultsHard = () => {
  const { resultsHard } = useMemoryStore();

  const lastResult =
    resultsHard[0] != null
      ? `moves: ${resultsHard[0].moves} time: ${formatTime(
          resultsHard[0].time
        )} date: ${formatDateToString(resultsHard[0].date)}`
      : "not played yet";

  return <div>last result hard: {lastResult} </div>;
};
