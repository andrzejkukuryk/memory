import React, { useEffect } from "react";
import "./App.scss";
import useMemoryStore from "./store";
import { Board } from "@components/board/board";
import { LevelForm } from "./components/levelForm/levelForm";

function App() {
  const { count, reset, randomBoard } = useMemoryStore();

  return (
    <div className="App">
      <h1>Memory: {count}</h1>
      <button onClick={reset}>Reset</button>
      <button onClick={randomBoard}>Random board</button>
      <LevelForm />
      <Board />
    </div>
  );
}

export default App;
