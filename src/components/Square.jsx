import React from 'react'

// Now we need to connect state over there and this event so that when i click button state got updated. 
            // How we can get access of the state defined in parent component, Well we need to pass function that will do logic as a custom attribute to this square.
const square = ({value,onClick,isWinningSquare}) => {
  return (
        <button type="button"
         onClick={onClick}
         className ={`square ${isWinningSquare} ? 'winning : ''} ${
            value === 'X' ? 'text-green' : 'text-orange'}`}>
          {value}  
        </button>
  )
}

export default square