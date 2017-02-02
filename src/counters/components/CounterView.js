import React, { Component } from 'react'

class Value extends Component {
  render() {
    const {
      id,
      value,
      increment,
      decrement,
      reset,
    } = this.props

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
}

Value.propTypes = {
  id: React.PropTypes.number,
  value: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  reset: React.PropTypes.func,
}

export default Value