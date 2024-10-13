import "./settings.scss";
import { LevelForm } from "../levelForm/levelForm";
import { StartButton } from "../startButton/startButton";
import { Counter } from "../counter/counter";
import { Timer } from "../timer/timer";
import { Results } from "../results/results";

export const Settings = () => {
  return (
    <div className="settingsContainer">
      <LevelForm />
      <StartButton />
      <Results />
    </div>
  );
};
