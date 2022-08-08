import React from 'react'

function StatusMessage({winner,current}) {
  
const noMoveLeft = current.board.every((el)=> el !==null)

  return(  
  <div className='status-message'>
    {winner && <>
    Winner is {''}
    <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
      {winner}
      </span>
    </>}
    {!winner &&
     !noMoveLeft &&
     <>
     Next Player is <span className={current.isNext ? 'text-green' : 'text-orange'}>{current.isNext? 'X':'O'}</span>
     </>
      }
    {!winner && noMoveLeft && <>
    <span className='text-green'>X</span> and <span className='text-orange'>O</span> tied
    </>
    }
  </div>
)
  }

export default StatusMessage