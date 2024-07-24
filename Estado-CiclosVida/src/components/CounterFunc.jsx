import React, { useState } from 'react'

const CounterFunc = (props) => {
    const [counter, setCounter] = useState(props.initialValue)
    const increment = () => { setCounter(counter + 1) }
    const decrement = () => { setCounter(counter - 1) } 

  return ([
    <div>
        <h3>Contador: {counter}  </h3>
        
        <button onClick={increment}> 
            +
        </button>

        <button onClick={decrement}> 
            -
        </button>
        
    </div>
    
])
}

export default CounterFunc