import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

const initialBoard = [
  '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
  '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
  '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
];

function App() {
  const [squares, setSquares] = useState(initialBoard);
  const [isWhiteNext, setIsWhiteNext] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5); // 5 minutes
  const [whiteCaptured, setWhiteCaptured] = useState([]);
  const [blackCaptured, setBlackCaptured] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      alert(`${isWhiteNext ? 'White' : 'Black'} player ran out of time!`);
    }
  }, [timeLeft, isWhiteNext]);

  function handleClick(i) {
    const newSquares = squares.slice();

    if (selectedSquare !== null) {
      if (isValidMove(selectedSquare, i, newSquares[selectedSquare])) {
        if (newSquares[i]) {
          // Capture piece
          if (isWhiteNext) {
            setBlackCaptured([...blackCaptured, newSquares[i]]);
          } else {
            setWhiteCaptured([...whiteCaptured, newSquares[i]]);
          }
        }
        // Move piece
        newSquares[i] = newSquares[selectedSquare];
        newSquares[selectedSquare] = null;
        setSquares(newSquares);
        setSelectedSquare(null);
        setIsWhiteNext(!isWhiteNext);
      } else {
        setSelectedSquare(null); // Deselect if move is invalid
      }
    } else if (newSquares[i] && (isWhiteNext ? newSquares[i].charCodeAt(0) <= 9817 : newSquares[i].charCodeAt(0) > 9817)) {
      // Select piece
      setSelectedSquare(i);
    }
  }

  function isValidMove(from, to, piece) {
    const rowFrom = Math.floor(from / 8);
    const colFrom = from % 8;
    const rowTo = Math.floor(to / 8);
    const colTo = to % 8;

    // Determine the direction of movement based on the player
    const direction = isWhiteNext ? -1 : 1;

    switch (piece) {
      case '♙': // White pawn
      case '♟': // Black pawn
        // Initial double move
        if (rowFrom + 2 * direction === rowTo && colFrom === colTo && squares[to] === null && (isWhiteNext ? rowFrom === 6 : rowFrom === 1)) {
          return true;
        }
        // Normal move
        if (rowFrom + direction === rowTo && colFrom === colTo && squares[to] === null) {
          return true;
        }
        // Capture move
        if (rowFrom + direction === rowTo && Math.abs(colFrom - colTo) === 1 && squares[to] !== null) {
          return true;
        }
        break;

      case '♖': // White rook
      case '♜': // Black rook
        if (rowFrom === rowTo || colFrom === colTo) {
          return true;
        }
        break;

      case '♘': // White knight
      case '♞': // Black knight
        if ((Math.abs(rowFrom - rowTo) === 2 && Math.abs(colFrom - colTo) === 1) ||
            (Math.abs(rowFrom - rowTo) === 1 && Math.abs(colFrom - colTo) === 2)) {
          return true;
        }
        break;

      case '♗': // White bishop
      case '♝': // Black bishop
        if (Math.abs(rowFrom - rowTo) === Math.abs(colFrom - colTo)) {
          return true;
        }
        break;

      case '♕': // White queen
      case '♛': // Black queen
        if (rowFrom === rowTo || colFrom === colTo || Math.abs(rowFrom - rowTo) === Math.abs(colFrom - colTo)) {
          return true;
        }
        break;

      case '♔': // White king
      case '♚': // Black king
        if (Math.abs(rowFrom - rowTo) <= 1 && Math.abs(colFrom - colTo) <= 1) {
          return true;
        }
        break;

      default:
        break;
    }
    return false;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{isWhiteNext ? 'White' : 'Black'} to move</div>
        <div>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</div>
        <div className="score-board">
          <div>White Captured: {whiteCaptured.join(', ')}</div>
          <div>Black Captured: {blackCaptured.join(', ')}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
