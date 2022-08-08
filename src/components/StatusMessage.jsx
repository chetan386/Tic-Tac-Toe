import React from 'react'

function StatusMessage({winner,current}) {
  
const noMoveLeft = current.board.every((el)=> el !==null)

  return(  
  <h2>
    {winner && `Winner is ${winner}`}
    {!winner && !noMoveLeft && `Next Player is ${current.isNext? 'X':'O'}`}
    {!winner && noMoveLeft && 'X and O tied'}
  </h2>
)
  }

export default StatusMessage