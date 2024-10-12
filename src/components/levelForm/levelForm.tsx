import { useMemoryStore } from "../../store";
import { Level } from "../../constants/levels.enum";
import "./levelForm.scss";
import { useState } from "react";
import classNames from "classnames";

export const LevelForm = () => {
  const [active, setActive] = useState<Level | null>(null);
  const { setLevel, level, resetGame, resetTime } = useMemoryStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLevel = Number(event.target.value);
    resetGame();
    resetTime();
    setTimeout(() => {
      setLevel(selectedLevel);
    }, 400);
  };

  const handleMouseDown = (level: Level) => {
    setActive(level);
  };

  const handleMouseUp = () => {
    setActive(null);
  };

  const labelEasyClass = classNames({
    active: active === Level.easy,
  });

  const labelNormalClass = classNames({
    active: active === Level.normal,
  });

  const labelHardClass = classNames({
    active: active === Level.hard,
  });

  return (
    <form>
      <input
        type="radio"
        name="level"
        id="easy"
        value={Level.easy}
        checked={level === Level.easy}
        onChange={handleChange}
      />
      <label
        htmlFor="easy"
        onMouseDown={() => handleMouseDown(Level.easy)}
        onMouseUp={handleMouseUp}
        className={labelEasyClass}
      >
        Easy
      </label>

      <input
        type="radio"
        name="level"
        id="normal"
        value={Level.normal}
        checked={level === Level.normal}
        onChange={handleChange}
      />
      <label
        htmlFor="normal"
        onMouseDown={() => handleMouseDown(Level.normal)}
        onMouseUp={handleMouseUp}
        className={labelNormalClass}
      >
        Normal
      </label>

      <input
        type="radio"
        name="level"
        id="hard"
        value={Level.hard}
        checked={level === Level.hard}
        onChange={handleChange}
      />
      <label
        htmlFor="hard"
        onMouseDown={() => handleMouseDown(Level.hard)}
        onMouseUp={handleMouseUp}
        className={labelHardClass}
      >
        Hard
      </label>
    </form>
  );
};
