import classNames from "classnames";
import "./card.scss";
import { useState, useEffect } from "react";
import useMemoryStore from "../../store";

interface CardProps {
  value: string;
  index: number;
}

export const Card = ({ value, index }: CardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);
  const { checkCard, matchedValues, currentIndex, increment } =
    useMemoryStore();

  useEffect(() => {
    setMatched(matchedValues.includes(value));
  }, [matchedValues]);

  useEffect(() => {
    if (currentIndex.length === 2) {
      if (currentIndex.includes(index) && !matchedValues.includes(value)) {
        setTimeout(() => {
          setShowBack(false);
        }, 1500);
      }
    }
  }, [currentIndex]);

  const rotate = () => {
    setShowBack(!showBack);
  };

  const handleClick = () => {
    if (!matched && !showBack) {
      rotate();
      checkCard(value, index);
    }
  };
  const cardClass = classNames("card", {
    back: showBack,
  });

  return (
    <div className="container" onClick={handleClick}>
      <div className={cardClass}>
        <div className="inner-card">
          <div className="front">Front Side</div>
          <div className="back">{value}</div>
        </div>
      </div>
    </div>
  );
};
