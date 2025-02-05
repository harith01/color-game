import React from 'react'
import GuessButton from './GuessButton'
import { shuffle } from 'lodash'

const ColorOptions = ({ colors, handleGuess }) => {
    const shuffled_colors = shuffle(colors)
  return (
    <div className='options-grid'>
        {shuffled_colors.map((color, index) => <GuessButton key={index} color={color} handleGuess={handleGuess} />)}
    </div>
  )
}

export default ColorOptions