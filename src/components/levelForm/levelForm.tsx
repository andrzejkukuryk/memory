import "./levelForm.scss";
import { useMemoryStore } from "../../store";
import { Level } from "../../constants/levels.enum";
import classNames from "classnames";

export const LevelForm = () => {
  const { setLevel, level, resetGame, resetTime } = useMemoryStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLevel = Number(event.target.value);
    resetGame();
    resetTime();
    setTimeout(() => {
      setLevel(selectedLevel);
    }, 400);
  };

  const labelEasyClass = classNames({
    active: level === Level.easy,
  });

  const labelNormalClass = classNames({
    active: level === Level.normal,
  });

  const labelHardClass = classNames({
    active: level === Level.hard,
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

      <label htmlFor="easy" className={labelEasyClass}>
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
      <label htmlFor="normal" className={labelNormalClass}>
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
      <label htmlFor="hard" className={labelHardClass}>
        Hard
      </label>
    </form>
  );
};
