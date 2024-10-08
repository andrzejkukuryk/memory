import classNames from "classnames";
import "./card.scss";
import { useState } from "react";

interface CardProps {
    value: string
}

export const Card = ({value}: CardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);

const rotate = () => {
    setShowBack(!showBack);
}

  const cardClass = classNames("card", {
    back: showBack,
  });

  return (
    <div className="container" onClick={rotate}>
      <div className={cardClass}>
        <div className="inner-card">
          <div className="front">Front Side</div>
          <div className="back">{value}</div>
        </div>
      </div>

    </div>
  );
};
