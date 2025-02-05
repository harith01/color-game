import React from 'react'

const GuessButton = ({ color, handleGuess }) => {
  return (
    <button 
     data-testid="colorOption" 
     onClick={handleGuess}
     className='btn'
     style={{ backgroundColor: color}}></button>
  )
}

export default GuessButton