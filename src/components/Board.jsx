import { useState } from "react";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]              // diagonals
  ];

  function checkWinner(board) {
    for (let [a, b, c] of winningCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (board[index]) return; // ignore if already filled
    if (checkWinner(board)) return; // ignore if game already won

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      alert(`${winner} wins!`);
    }
  }
  
  function resetGame() {
  setBoard(Array(9).fill(null));
  setIsXNext(true);
}


  return (
    <div className="board">
      {board.map((cell, i) => (
        <div
          key={i}
          className="cells"
          onClick={() => handleClick(i)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
}
