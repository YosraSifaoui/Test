import store from "../store";

import "./Cell.css";

function openCell(x, y, value) {
  if (store.getState().message === "lost") {
    return;
  }

  store.dispatch({ type: "grid/open-cell", payload: { x, y } });

  if (value === "bomb") {
    store.dispatch({
      type: "game/update-message",
      payload: { message: "lost" },
    });
    return;
  }

  if (value !== "bomb") {
    store.dispatch({ type: "score/increment", payload: { scoreToAdd: value } });
  }

  if (store.getState().score === 45) {
    store.dispatch({
      type: "game/update-message",
      payload: { message: "won" },
    });
  }
}

function Cell(props) {
  if (props.opened) {
    return (
      <span className={`cell ${props.opened ? "greenyellow" : ""}`}>
        {props.value === "bomb" ? (
          <img src="bomb.png" alt="bomb" />
        ) : (
          props.value
        )}
      </span>
    );
  }
  return (
    <span
      className="cell"
      onClick={() => openCell(props.x, props.y, props.value)}
    />
  );
}

export default Cell;
