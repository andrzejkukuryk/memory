// import "./resultsNormal.scss";
// import { useMemoryStore } from "../../store";
// import { findBestResultIndex } from "../../utils/bestResultIndex";
// import { formatDateToString } from "../../utils/formatDateToString";
// import { formatTime } from "../../utils/formatTime";

// export const ResultsNormal = () => {
//   const { resultsNormal } = useMemoryStore();

//   const bestResultIndex =
//     resultsNormal.length > 0 ? findBestResultIndex(resultsNormal) : 0;

//   const bestResult =
//     resultsNormal[bestResultIndex] != null
//       ? `moves: ${resultsNormal[bestResultIndex].moves} time: ${formatTime(
//           resultsNormal[bestResultIndex].time
//         )} date: ${formatDateToString(resultsNormal[0].date)}`
//       : "not played yet";

//   return <p>best result normal: {bestResult} </p>;
// };
