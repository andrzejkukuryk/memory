import "./App.scss";
import { Board } from "./components/board/board";
import { Settings } from "./components/settings/settings";

function App() {
  return (
    <div className="App">
      <Settings />
      <Board />
    </div>
  );
}

export default App;
