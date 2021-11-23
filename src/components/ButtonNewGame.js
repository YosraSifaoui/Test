import React from "react";

import store from "../store";

import "./ButtonNewGame.css";

function resetGame() {
  store.dispatch({ type: "score/reset" });
}

function ButtonNewGame() {
  return (
    <div className="button-new-game">
      <button onClick={resetGame}>New game</button>
    </div>
  );
}

export default ButtonNewGame;
