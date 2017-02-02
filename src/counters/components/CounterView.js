import React from 'react'

const Value = ({
  id,
  value,
  increment,
  decrement,
  reset,
}) => {
  return (
    <div>
      Counter {id} with value {value}
      <button onClick={increment}>
        +
        </button>
      <button onClick={decrement}>
        -
        </button>
      <button onClick={reset}>
        reset
        </button>
    </div >
  )
}

export default Value
