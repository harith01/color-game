import { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import _ from "lodash";
import ColorOptions from "./components/ColorOptions";
import { motion } from "framer-motion";

function App() {
  const [colors, setColors] = useState(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'])
  const [score, setScore] = useState(0)
  const [guessCorrect, setGuessCorrect] = useState(false)
  const [swap, setSwap] = useState(false)

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
    setSwap(!swap)
  }


  const handleRestart = () => {
    setScore(0)
  }

  useEffect(() => {
    setColors(_.shuffle(colors))
  }, [score])
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
            key={swap}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            You Guessed Right!
          </motion.p>
        </>
      ) : (
        <>
          {score > 0 && (<>
            <motion.p
              className="game-status"
              key={swap}
              animate={{ opacity: 1, scale: 1.5, x: [0, -10, 10, -10, 10, 0], color: ["#ff0000"] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Ooops!! Sorry. Your guess is wrong!
            </motion.p>
            <p>Click the Restart Button</p>
          </>)}
        </>
      )}
      <p className="score">Your score: <span data-testid="score">{score}</span></p>
      <button className="btn restart" onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default App;
