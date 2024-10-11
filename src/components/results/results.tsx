import { useEffect } from "react";
import { useMemoryStore } from "../../store";

export const Result = () => {
  const { resultsEasy, addEasy, setLs } = useMemoryStore();

  useEffect(() => {
    console.log(resultsEasy);
  }, [resultsEasy]);

  const kopytko = () => {
    addEasy({ moves: 3, time: 432, date: new Date(Date.now()) });
  };

  const save = () => {
    setLs();
  };
  return (
    <div>
      <button onClick={kopytko}> add easy</button>
      <button onClick={save}> save</button>
    </div>
  );
};
