import React, { useEffect } from "react";
import "./App.scss";
import { useMemoryStore } from "./store";
import { Board } from "./components/board/board";
import { LevelForm } from "./components/levelForm/levelForm";
import { StartButton } from "./components/startButton/startButton";
import { Timer } from "./components/timer/timer";

function App() {
  const { movesCounter } = useMemoryStore();

  return (
    <div className="App">
      <h1>Moves: {movesCounter}</h1>
      <Timer />
      <LevelForm />
      <StartButton />
      <Board />
    </div>
  );
}

export default App;
