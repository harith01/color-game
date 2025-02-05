import React from 'react'

const ColorBox = ({color}) => {

  return (
    <div className='colorBox' data-testid="colorBox" style={{ backgroundColor: color, color: 'white'}}>
    </div>
  )
}

export default ColorBox