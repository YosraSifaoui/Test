import { createStore } from "redux";

import { generateGrid } from "./utils";

const defaultState = {
  grid: generateGrid(),
  score: 0,
  message: "playing",
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "score/reset":
      defaultState.grid = generateGrid();
      return { ...defaultState };
    case "score/increment":
      return {
        ...state,
        score: state.score + action.payload.scoreToAdd,
      };
    case "grid/open-cell":
      state.grid[action.payload.x][action.payload.y].opened = true;
      return { ...state, grid: [...state.grid] };
    case "game/update-message":
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

const store = createStore(mainReducer);

export default store;
