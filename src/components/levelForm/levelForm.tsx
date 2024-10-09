import useMemoryStore from "../../store";
import { Level } from "../../constants/levels.enum";
import "./levelForm.scss";

export const LevelForm = () => {
  const { setLevel, level } = useMemoryStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLevel = Number(event.target.value);
    setLevel(selectedLevel);
  };

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
      <label htmlFor="easy">Easy</label>

      <input
        type="radio"
        name="level"
        id="normal"
        value={Level.normal}
        checked={level === Level.normal}
        onChange={handleChange}
      />
      <label htmlFor="normal">Normal</label>

      <input
        type="radio"
        name="level"
        id="hard"
        value={Level.hard}
        checked={level === Level.hard}
        onChange={handleChange}
      />
      <label htmlFor="hard">Hard</label>
    </form>
  );
};
