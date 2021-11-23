function getSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateRandomNumberFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function splitArrayIntoChunks(arr, nbOfItemsPerChunk) {
  const result = [];
  for (let i = 0, j = arr.length; i < j; i += nbOfItemsPerChunk) {
    result.push(arr.slice(i, i + nbOfItemsPerChunk));
  }
  return result;
}

function addSolverCells(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sumOfArray = arr[i].reduce(
      (a, b) => (b.value !== "bomb" ? a + b.value : a),
      0
    );
    const nbOfBombs = arr[i].reduce(
      (a, b) => (b.value === "bomb" ? a + 1 : a),
      0
    );
    arr[i].push({ isSolverCell: true, sumOfArray, nbOfBombs });
  }
  const newRow = [];
  for (let i = 0; i < arr.length; i++) {
    let sumOfArray = 0;
    let nbOfBombs = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i].value === "bomb") {
        nbOfBombs++;
      } else {
        sumOfArray += arr[j][i].value;
      }
    }

    newRow.push({ isSolverCell: true, sumOfArray, nbOfBombs });
  }
  arr.push(newRow);
  return arr;
}

export function generateGrid() {
  const numberOfCells = 36;
  const gridSum = 45;
  let numberOfBombs = generateRandomNumberFromInterval(5, 10);
  let numberOfNonBombs = numberOfCells - numberOfBombs;
  let result = new Array(numberOfNonBombs).fill(1);

  while (getSum(result) < gridSum) {
    const indexOf1 = result.findIndex((e) => e === 1);
    if (indexOf1 !== -1) {
      result[indexOf1] = generateRandomNumberFromInterval(2, 3);
    } else {
      const indexOf2 = result.findIndex((e) => e === 2);
      result[indexOf2] = 3;
    }
  }

  while (numberOfBombs--) {
    result.push("bomb");
  }

  result = shuffleArray(result);

  result = result.map((e) => {
    return { value: e, opened: false };
  });

  result = splitArrayIntoChunks(result, 6);

  result = addSolverCells(result);

  return result;
}
