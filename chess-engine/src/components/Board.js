import React from 'react';
import Square from './Square';

function Board({ squares, onClick }) {
  function renderSquare(i) {
    return (
      <Square 
        value={squares[i]} 
        onClick={() => onClick(i)} 
        key={i}
      />
    );
  }

  const boardSize = 8;
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    const squares = [];
    for (let col = 0; col < boardSize; col++) {
      squares.push(renderSquare(row * boardSize + col));
    }
    board.push(<div key={row} className="board-row">{squares}</div>);
  }

  return <div>{board}</div>;
}

export default Board;
