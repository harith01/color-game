import { useState } from "react";
import ColorBox from "./components/ColorBox";
import _ from "lodash";
import ColorOptions from "./components/ColorOptions";
import { motion } from "framer-motion";

function App() {
  const [colors, setColors] = useState(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'])
  const [score, setScore] = useState(0)
  const [guessCorrect, setGuessCorrect] = useState(false)
  const [key, setKey] = useState(false)
  const [firstMove, setFirstMove] = useState(true)

  const colorBox = document.querySelector('.colorBox')


  const handleGuess = (e) => {
    console.log(e.target.style.backgroundColor)
    console.log(colorBox?.style.backgroundColor)
    if (e.target.style.backgroundColor === colorBox?.style.backgroundColor) {
      setGuessCorrect(true)
      setScore(score + 1)
    } else {
      setGuessCorrect(false)
    }
    setFirstMove(false)
    setKey(!key)
    setColors(_.shuffle(colors))
  }


  const handleRestart = () => {
    setScore(0)
    setFirstMove(true)
  }


  return (
    <div className="container">
      <h1>Welcome to our Color Game</h1>
      <ColorBox color={colors[1]} />
      <p data-testid="gameInstructions">Guess the correct color shown in the box above by clicking the appropriate button</p>
      <ColorOptions colors={colors} handleGuess={handleGuess} />
      {guessCorrect ? (
        <>
          <motion.p
            className="game-status" data-testid="gameStatus"
            key={key}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            You Guessed Right!
          </motion.p>
        </>
      ) : (
        <>
          {!firstMove && (<>
            <motion.p
              className="game-status"
              key={key}
              animate={{ opacity: 1, scale: 1.5, x: [0, -10, 10, -10, 10, 0], color: ["#ff0000"] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Ooops!! Sorry. Your guess is wrong!
            </motion.p>
            <p>Click the Restart Button</p>
          </>)}
        </>
      )}
      <p data-testid="score" className="score">Your score: <span data-testid="score">{score}</span></p>
      <button data-testid="newGameButton" className="btn restart" onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
