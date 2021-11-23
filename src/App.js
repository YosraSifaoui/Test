import ButtonNewGame from "./components/ButtonNewGame.js";
import Grid from "./components/Grid.js";
import Message from "./components/Message.js";
import Score from "./components/Score.js";

import "./App.css";

function App() {
  return (
    <div className="app">
      <ButtonNewGame />
      <Grid />
      <Score />
      <Message />
    </div>
  );
}

export default App;
