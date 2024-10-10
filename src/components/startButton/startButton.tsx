import { useMemoryStore } from "../../store";
import "./startButton.scss";

export const StartButton = () => {
  const { resetGame, resetTime, randomBoard } = useMemoryStore();
  const handleClick = () => {
    resetGame();
    resetTime();
    setTimeout(() => {
      randomBoard();
    }, 600);
  };

  return (
    <button className="start" onClick={handleClick}>
      New game
    </button>
  );
};
