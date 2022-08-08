import React,{useState} from 'react'
import Square from './Square'

const Board = () => {
   
   // First element is state and second element is update function.
   const [board,setBoard] = useState( Array(9).fill(null));
   // Now i want to update the state the state when i click on square now when events comes in.
   // Go to Square.jsx to and event onClick and add callback function
   // we need another state to keep track of another player
    const [isNext,setIsNext] = useState(false);
   //     return isNext? 'X': 'O' after this we should also update state other wise another player turn always remain false

   const handleSquareClick = (position) => {
      
      if( board[position] ){
         return;
      }

      setBoard( (prev) => {

         return prev.map((square,pos) =>{
            if(pos ===position ){
               return isNext? 'X': 'O'
            }

            return square;
         })
      } )
      setIsNext( (prev)=>!prev)
   }
  
   const renderSquare = (position) => {
        return(
        <Square 
         value= {board[position]}
         onClick= {()=> handleSquareClick(position)} 
         />
        )
   }





  return (
    <div className='board'>
     <div className='board-row'>
        {/* <Square value={board[0]} onCLick{()=>{ */}
         {/* // We need to pass 0 to know which square got clicked and this we have to do for each block and to reduce this create another function render */}
         {/* handleSquareClick(0) */}
      
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
     </div>
     <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
     </div>
     <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
     </div>
    </div>
  )
}

export default Board