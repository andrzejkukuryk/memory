import React from "react";
import "./App.scss";
import { Board } from "./components/board/board";
import { Settings } from "./components/settings/settings";
import { Stats } from "./components/stats/stats";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Settings />
        <Stats />
      </div>
      <Board />
    </div>
  );
}

export default App;
