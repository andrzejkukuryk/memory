import "./stats.scss";
import { Counter } from "../counter/counter";
import { Result } from "../results/results";
import { Timer } from "../timer/timer";

export const Stats = () => {
  return (
    <div>
      <Result />
      <div className="gameStatsContainer">
        <Timer />
        <Counter />
      </div>
    </div>
  );
};
