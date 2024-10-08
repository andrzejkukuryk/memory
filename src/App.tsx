import React from "react";
import "./App.scss";
import useMemoryStore from "./store";
import { Board } from "./components/board/board";

function App() {
  const { count, cards, increment, reset } = useMemoryStore();

  return (
    <div className="App">
      <h1>Memory: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <Board />
    </div>
  );
}

export default App;
