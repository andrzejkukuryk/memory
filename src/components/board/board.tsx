import classNames from "classnames";
import { useMemoryStore } from "../../store";
import { Card } from "../card/card";
import "./board.scss";
import { Level } from "../../constants/levels.enum";

export const Board = () => {
  const { cards, level } = useMemoryStore();

  const boardContainerClass = classNames("boardContainer", {
    easy: level === Level.easy,
    normal: level === Level.normal,
    hard: level === Level.hard,
  });
  return (
    <div className={boardContainerClass}>
      {cards.map((card, index) => (
        <Card value={card} index={index} key={`card${index}`} />
      ))}
    </div>
  );
};
