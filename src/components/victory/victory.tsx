import "./victory.scss";
import { winWord } from "../../data/win";

export const Victory = () => {
  const randomIndex = (): number => {
    return Math.floor(Math.random() * winWord.length);
  };

  return (
    <div className="victoryContainer">
      <p>{winWord[randomIndex()]}</p>
    </div>
  );
};
