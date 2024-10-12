import "./settings.scss";
import { LevelForm } from "../levelForm/levelForm";
import { StartButton } from "../startButton/startButton";

export const Settings = () => {
  return (
    <div className="settingsContainer">
      <LevelForm />
      <StartButton />
    </div>
  );
};
