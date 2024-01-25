import { useState } from 'react'
import './App.css'
import RandomCards from './cards'
import Scoreboard from './scoreboard'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [cardArray, setCardArray] = useState([
    {key: uuidv4(), cardNumber: 1, clicked: false},
    {key: uuidv4(), cardNumber: 2, clicked: false},
    {key: uuidv4(), cardNumber: 3, clicked: false},
    {key: uuidv4(), cardNumber: 4, clicked: false},
    {key: uuidv4(), cardNumber: 5, clicked: false},
    {key: uuidv4(), cardNumber: 6, clicked: false},
    {key: uuidv4(), cardNumber: 7, clicked: false},
    {key: uuidv4(), cardNumber: 8, clicked: false},
    {key: uuidv4(), cardNumber: 9, clicked: false},
    {key: uuidv4(), cardNumber: 10, clicked: false},
    {key: uuidv4(), cardNumber: 11, clicked: false},
    {key: uuidv4(), cardNumber: 12, clicked: false},
    {key: uuidv4(), cardNumber: 13, clicked: false},
    {key: uuidv4(), cardNumber: 14, clicked: false},
    {key: uuidv4(), cardNumber: 15, clicked: false},
])

function handleClick(card) {
  if(card.clicked === true) {
    resetGame()
    updateHighScore()
    return
  }
  card.clicked = true
  updateScore()
  shuffleCards()
}

function shuffleCards() {
  const shuffledCards = [...cardArray];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  setCardArray(shuffledCards);
}

// Scoreboard

const [currentScore, setCurrentScore] = useState(0)
const [highestScore, setHighestScore] = useState(0)
const [gameMessage, setGameMessage] = useState("hidden")

function updateScore() {
  let newScore = currentScore + 1
  setCurrentScore(newScore)
  updateHighScore(newScore)
  if(newScore === cardArray.length) {
    gameOver()
  }
}

function updateHighScore(score) {
  if(highestScore < score) {
    let newHighScore = score
    setHighestScore(newHighScore)
  }
}

function resetGame() {
  cardArray.map((card) => (card.clicked = false))
  let resetScore = 0
  let message = "hidden"
  setCurrentScore(resetScore)
  setGameMessage(message)
}

function gameOver() {
  let newMessage = "show" 
  setGameMessage(newMessage)
}
 
  return (
    <>
    <div className='heading'>
    <h2>Memory Card</h2>
    <Scoreboard currentScore={currentScore} highestScore={highestScore}/>
    </div>
    <RandomCards cardArray={cardArray} handleClick={handleClick} gameMessage={gameMessage}/>
    <span className="photo-credit">Photo credit: <a href="http://picsum.photos/">Lorem Picsum</a></span>
    </>
  )
}

export default App
