import { useEffect } from "react";
import { useMemoryStore } from "../../store";
import { formatDateToString } from "../../utils/formatDateToString";
import { formatTime } from "../../utils/formatTime";
import { Level } from "../../constants/levels.enum";
import { ResultsEasy } from "../resultsEasy/resultsEasy";
import { ResultsNormal } from "../resultsNormal/resultsNormal";
import { ResultsHard } from "../resultsHard/resultsHard";

export const Result = () => {
  const {
    level,
    movesCounter,
    time,
    resultsEasy,
    resultsNormal,
    resultsHard,
    addEasy,
    setLs,
  } = useMemoryStore();

  useEffect(() => {
    console.log(resultsEasy[0].date);
  }, [resultsEasy]);

  const kopytko = () => {
    addEasy({ moves: movesCounter, time: time, date: new Date(Date.now()) });
  };

  const save = () => {
    setLs();
  };
  return (
    <div>
      <button onClick={kopytko}> add easy</button>
      <button onClick={save}> save</button>
      {level === Level.easy && <ResultsEasy />}
      {level === Level.normal && <ResultsNormal />}
      {level === Level.hard && <ResultsHard />}
    </div>
  );
};
