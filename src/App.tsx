import React, { useEffect } from "react";
import "./App.scss";
import useMemoryStore from "./store";
import { Board } from "@components/board/board";

function App() {
  const { count, reset } = useMemoryStore();

  return (
    <div className="App">
      <h1>Memory: {count}</h1>
      <button onClick={reset}>Reset</button>
      <Board />
    </div>
  );
}

export default App;
