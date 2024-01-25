import { useState } from 'react'
import './App.css'
import RandomCards from './cards'
import Scoreboard from './scoreboard'
import { v4 as uuidv4 } from 'uuid';


function App() {

  // Take some time to think about the features you want to implement, which components you need, how to structure your application,
  //  and how to get the images from an API. Your application should include a scoreboard, which counts the current score, 
  //  and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards
  //   in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.


  //  component that displays images - function that gets 12 images from lorem ipsum api
  //  function that shuffles images each click - run function when component mounts
  // component that returns scoreboard - function that counts current score, function that shows highest score so far.
  // 

  // function handleClick(card) {
  //     if(card.clicked === true) {
  //         alert("clicked")
  //     }
  //     card.clicked = true
  //     console.log(card)
  //     shuffleCards()
  // }

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
  // console.log(card)
  if(card.clicked === true) {
    updateHighScore()
    resetScore()
    alert("clicked")
    return
  }
  card.clicked = true
  updateScore()
  // getHighestScore()
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

function updateScore() {
  let newScore = currentScore + 1
  setCurrentScore(newScore)
  updateHighScore(newScore)
}

function updateHighScore(score) {
  if(highestScore < score) {
    let newHighScore = score
    setHighestScore(newHighScore)
  }
}

function resetScore() {
  let resetScore = 0
  setCurrentScore(resetScore)
}

  return (
    <>
    <h2>Memory Card</h2>
    <Scoreboard currentScore={currentScore} highestScore={highestScore}/>
    <RandomCards cardArray={cardArray} handleClick={handleClick}/>
    </>
  )
}

export default App
