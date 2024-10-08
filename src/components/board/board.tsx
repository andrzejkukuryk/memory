import useMemoryStore from "../../store";
import { Card } from "../card/card";
import "./board.scss"

export const Board = () => {
  const { cards } = useMemoryStore();
  return (
    <div className="boardContainer">
      {cards.map((card, index) => (
        <Card value={card} index={index} key={`card${index}`} />
      ))}
    </div>
  );
};
