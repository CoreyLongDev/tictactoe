import { useState } from "react";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="board">
      {board.map((cell, i) => (
        <div key={i} className="cells">
          {cell || i + 1}
        </div>
      ))}
    </div>
  );
}
