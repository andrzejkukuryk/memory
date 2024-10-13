import "./results.scss";
import { useEffect } from "react";
import { useMemoryStore } from "../../store";
import { Level } from "../../constants/levels.enum";

import { findBestResult } from "../../utils/findBestResult";
import { formatTime } from "../../utils/formatTime";
import { Result } from "../../models/result";
import { formatDateToString } from "../../utils/formatDateToString";
import { Timer } from "../timer/timer";

export const Results = () => {
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

  const bestEasy = findBestResult(resultsEasy);
  const bestNormal = findBestResult(resultsNormal);
  const bestHard = findBestResult(resultsHard);

  const bestDate = (result: Result | null): string => {
    return result != null ? formatDateToString(result.date) : "not played yet";
  };

  const bestMoves = (result: Result | null): string => {
    return result != null ? result.moves.toString() : "not played yet";
  };
  const bestTime = (result: Result | null): string => {
    return result != null ? formatTime(result.time) : "not played yet";
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="current">Current</th>
          <th>Easy</th>
          <th>Normal</th>
          <th>Hard</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Moves</td>
          <td className="current">{movesCounter}</td>
          <td>{bestMoves(bestEasy)}</td>
          <td>{bestMoves(bestNormal)}</td>
          <td>{bestMoves(bestHard)}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td className="current">
            <Timer />
          </td>
          <td>{bestTime(bestEasy)}</td>
          <td>{bestTime(bestNormal)}</td>
          <td>{bestTime(bestHard)}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td></td>
          <td className="date">{bestDate(bestEasy)}</td>
          <td className="date">{bestDate(bestNormal)}</td>
          <td className="date">{bestDate(bestHard)}</td>
        </tr>
      </tbody>
    </table>
  );
};
