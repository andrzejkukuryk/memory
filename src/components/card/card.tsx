import classNames from "classnames";
import "./card.scss";
import { useState, useEffect } from "react";
import useMemoryStore from "../../store";
import cavatappi from "@assets/cavatappi.jpg";
import fusilli from "@assets/fusilli.jpg";
import penne from "@assets/penne.jpg";
import ravioli from "@assets/ravioli.jpg";
import rigatoni from "@assets/rigatoni.jpg";
import rotini from "@assets/rotini.jpg";
import tortellini from "@assets/tortellini.jpg";
import { Value } from "../../constants/values.enum";

const images = {
  cavatappi: cavatappi,
  fusilli: fusilli,
  penne: penne,
  ravioli: ravioli,
  rigatoni: rigatoni,
  rotini: rotini,
  tortellini: tortellini,
};

interface CardProps {
  value: Value;
  index: number;
}

export const Card = ({ value, index }: CardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);
  const {
    checkCard,
    matchedValues,

    currentIndex,
    resetComponents,
  } = useMemoryStore();

  useEffect(() => {
    setMatched(matchedValues.includes(value));
  }, [matchedValues]);

  useEffect(() => {
    if (currentIndex.length === 2) {
      if (currentIndex.includes(index) && !matchedValues.includes(value)) {
        setTimeout(() => {
          setShowBack(false);
        }, 1000);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (resetComponents) {
      resetCard();
    }
  }, [resetComponents]);

  const rotate = () => {
    setShowBack(!showBack);
  };

  const resetCard = () => {
    setShowBack(false);
    setMatched(false);
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
          <div className="back">
            <img src={images[value]} className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
