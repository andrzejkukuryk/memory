import { useEffect } from "react";
import { useMemoryStore } from "../../store";
import { Level } from "../../constants/levels.enum";
import { ResultsEasy } from "../resultsEasy/resultsEasy";
import { ResultsNormal } from "../resultsNormal/resultsNormal";
import { ResultsHard } from "../resultsHard/resultsHard";

export const Result = () => {
  const {
    level,
    movesCounter,
    time,
    matchedValues,
    resultsEasy,
    resultsNormal,
    resultsHard,
    addEasy,
    addNormal,
    addHard,
    setLs,
  } = useMemoryStore();

  useEffect(() => {
    if (matchedValues.length === level) {
      addResult();
      setLs();
    }
  }, [matchedValues]);

  const addResult = () => {
    switch (level) {
      case Level.easy: {
        addEasy({
          moves: movesCounter,
          time: time,
          date: new Date(Date.now()),
        });
        break;
      }
      case Level.normal: {
        addNormal({
          moves: movesCounter,
          time: time,
          date: new Date(Date.now()),
        });
        break;
      }
      case Level.hard: {
        addHard({
          moves: movesCounter,
          time: time,
          date: new Date(Date.now()),
        });
        break;
      }
    }
  };

  const save = () => {
    setLs();
  };
  return (
    <div>
      <button onClick={addResult}> add result</button>
      <button onClick={save}> save</button>
      {level === Level.easy && <ResultsEasy />}
      {level === Level.normal && <ResultsNormal />}
      {level === Level.hard && <ResultsHard />}
    </div>
  );
};
