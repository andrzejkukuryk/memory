import React from "react";
import "./App.scss";
import { Board } from "./components/board/board";
import { Settings } from "./components/settings/settings";
import { Stats } from "./components/stats/stats";
import { Timer } from "./components/timer/timer";

function App() {
  return (
    <div className="App">
      <Settings />
      <Board />
    </div>
  );
}

export default App;
