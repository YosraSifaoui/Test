import "./SolverCell.css";

function SolverCell(props) {
  return (
    <span className="solver-cell">
      {props.sumOfArray}/{props.nbOfBombs} <img src="bomb.png" alt="bomb" />
    </span>
  );
}

export default SolverCell;
