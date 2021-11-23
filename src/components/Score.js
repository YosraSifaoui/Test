import React, { useState } from "react";

import store from "../store";

import "./Score.css";

function Score() {
  const [score, setScore] = useState(store.getState().score);

  store.subscribe(() => {
    setScore(store.getState().score);
  });

  return <div className="score">Score: {score}</div>;
}

export default Score;
