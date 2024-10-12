import { useMemoryStore } from "../../store";
import "./counter.scss";

export const Counter = () => {
  const { movesCounter } = useMemoryStore();
  return (
    <div className="counterContainer">
      <p>Moves: {movesCounter}</p>
    </div>
  );
};
