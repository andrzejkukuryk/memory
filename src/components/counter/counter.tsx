import "./counter.scss";
import { useMemoryStore } from "../../store";

export const Counter = () => {
  const { movesCounter } = useMemoryStore();
  return (
    <div className="counterContainer">
      <p>Moves: {movesCounter}</p>
    </div>
  );
};
