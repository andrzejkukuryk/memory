import "./stats.scss";
import { Counter } from "../counter/counter";
import { Results } from "../results/results";
import { Timer } from "../timer/timer";

export const Stats = () => {
  return (
    <div>
      <Results />
      <div className="gameStatsContainer">
        <Timer />
        <Counter />
      </div>
    </div>
  );
};
