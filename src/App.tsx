import React, { useEffect } from "react";
import "./App.scss";
import useMemoryStore from "./store";
import { Board } from "./components/board/board";
import { LevelForm } from "./components/levelForm/levelForm";
import { StartButton } from "./components/startButton/startButton";
import { Timer } from "./components/timer/timer";

function App() {
  const { count } = useMemoryStore();

  return (
    <div className="App">
      <h1>Memory: {count}</h1>
      <Timer />
      <LevelForm />
      <StartButton />
      <Board />
    </div>
  );
}

export default App;
