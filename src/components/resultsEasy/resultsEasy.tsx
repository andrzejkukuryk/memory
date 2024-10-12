import { useMemoryStore } from "../../store";
import { formatDateToString } from "../../utils/formatDateToString";
import { formatTime } from "../../utils/formatTime";

export const ResultsEasy = () => {
  const { resultsEasy } = useMemoryStore();

  const lastResult =
    resultsEasy[0] != null
      ? `moves: ${resultsEasy[0].moves} time: ${formatTime(
          resultsEasy[0].time
        )} date: ${formatDateToString(resultsEasy[0].date)}`
      : "not played yet";

  return <div>last result easy: {lastResult} </div>;
};
