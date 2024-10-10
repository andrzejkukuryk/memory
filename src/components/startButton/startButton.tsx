import useMemoryStore from "../../store";
import "./startButton.scss";

export const StartButton = () => {
  const { reset, randomBoard } = useMemoryStore();
  const handleClick = () => {
    reset();
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
