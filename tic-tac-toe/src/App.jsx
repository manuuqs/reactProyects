import react, { useState } from 'react';
import './App.css';
import confetti from "canvas-confetti"
import { Square } from './components/Square';
import { turns, WINNER_COBOS } from './Constants';
import { WinnerModal } from './components/Winner';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })
   
  //null cuando no hay ganador, false empate
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(()=>{
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ??  turns.X
  })

  const checkWinner = (boardToCheck)=> {
    for(const combo of WINNER_COBOS){
      const[a,b,c] = combo;
      if(boardToCheck[a] && boardToCheck[a]===boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a];
      }
    }
    return null;
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if(board[index] != null || winner)
      return
    const newBoard = [... board]
    newBoard[index]= turn;
    setBoard(newBoard)
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    
  
    }else if(checkEndGame(newBoard)){
      setWinner(false) //empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>
        Reset del juego
      </button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
        {
         <WinnerModal resetGame={resetGame} winner={winner}/>
        }
      </section>
    </main>
  );
}

export default App;
