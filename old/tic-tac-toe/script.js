const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameover = false;

cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    if (!gameover) {
      const cellId = event.target.id.replace('cell-', '');
      if (getCellState(cellId) === '') {
        setCellState(cellId, currentPlayer);
        checkForWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Update currentPlayer
      }
    }
  });
});

// ...

function getCellState(cellId) {
  return document.getElementById(`cell-${cellId}`).textContent;
}

function setCellState(cellId, player) {
  document.getElementById(`cell-${cellId}`).textContent = player;
}

function checkForWin() {
  const winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  for (const combination of winningCombinations) {
    const cell1 = getCellState(combination[0]);
    const cell2 = getCellState(combination[1]);
    const cell3 = getCellState(combination[2]);
    if (cell1 === cell2 && cell2 === cell3 && cell1 !== '') {
      gameover = true;
      alert(`Player ${currentPlayer} wins!`);
    }
  }
}