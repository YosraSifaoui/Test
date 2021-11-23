import React, { useState } from "react";

import store from "../store";
import Cell from "./Cell";
import SolverCell from "./SolverCell.js";

import "./Grid.css";

function Grid() {
  const [grid, setGrid] = useState(store.getState().grid);

  store.subscribe(() => {
    setGrid(store.getState().grid);
  });

  return (
    <div className="grid">
      {grid.map(function (row, x) {
        return (
          <div key={`row-${x}`}>
            {row.map((column, y) => {
              return column.isSolverCell ? (
                <SolverCell
                  key={`solver-cell-${x}-${y}`}
                  sumOfArray={column.sumOfArray}
                  nbOfBombs={column.nbOfBombs}
                />
              ) : (
                <Cell
                  key={`cell-${x}-${y}`}
                  value={column.value}
                  opened={column.opened}
                  x={x}
                  y={y}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
