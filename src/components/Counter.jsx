import { useState } from 'react'



function Counter() {

  const [ counter, setCounter ] = useState(0)

  const handleIncrease = () => {
    setCounter ( counter + 1 )
  }

  const handleDecrease = () => {
    setCounter (counter - 1)
  }

  return (
    <div id='counter-container'>
      <button onClick={handleDecrease}> - </button>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}> + </button>
    </div>
  )
}

export default Counter