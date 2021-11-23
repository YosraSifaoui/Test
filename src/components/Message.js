import React, { useState } from "react";

import store from "../store";

import "./Message.css";

function Message() {
  const [message, setMessage] = useState(store.getState().message);

  store.subscribe(() => {
    setMessage(store.getState().message);
  });

  return (
    <div
      className={`message ${
        message === "lost" ? "red" : message === "won" ? "green" : ""
      }`}
    >
      {message === "playing"
        ? "You need 45 points"
        : message === "lost"
        ? "You loose"
        : "You won"}
    </div>
  );
}

export default Message;
