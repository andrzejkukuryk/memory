import { useMemoryStore } from "../../store";
import { formatDateToString } from "../../utils/formatDateToString";
import { formatTime } from "../../utils/formatTime";

export const ResultsNormal = () => {
  const { resultsNormal } = useMemoryStore();

  const lastResult =
    resultsNormal[0] != null
      ? `moves: ${resultsNormal[0].moves} time: ${formatTime(
          resultsNormal[0].time
        )} date: ${formatDateToString(resultsNormal[0].date)}`
      : "not played yet";

  return <div>last result normal: {lastResult} </div>;
};
