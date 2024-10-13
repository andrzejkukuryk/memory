import classNames from "classnames";
import { useMemoryStore } from "../../store";
import { Card } from "../card/card";
import "./board.scss";
import { Level } from "../../constants/levels.enum";
import { Victory } from "../victory/victory";

export const Board = () => {
  const { cards, level, matchedValues } = useMemoryStore();

  const boardContainerClass = classNames("boardContainer", {
    easy: level === Level.easy,
    normal: level === Level.normal,
    hard: level === Level.hard,
  });

  const showVictory = (): boolean => {
    return matchedValues.length === level;
  };
  return (
    <>
      <div className={boardContainerClass}>
        {cards.map((card, index) => (
          <Card value={card} index={index} key={`card${index}`} />
        ))}
        {showVictory() && <Victory />}
      </div>
      {/* <Victory /> */}
    </>
  );
};
