import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as c from '../actions'
import CounterView from './CounterView'

class CounterList extends Component {
  render() {
    return (
      <div className="container">
        <button onClick={this.props.onCreate}>Add container</button>
        <button onClick={this.props.onDestroy}>Remove container</button>
        <div>
          {
            this.props.counters.listAllIds.map(
              id => {
                return (
                  <CounterView
                    key={id}
                    id={id}
                    value={this.props.counters.listById[id].value}
                    increment={() => this.props.onIncrement(id)}
                    decrement={() => this.props.onDecrement(id)}
                    reset={() => this.props.onReset(id)}
                    incrementAsync={() => this.props.onIncrementAsync(id)}
                  />
                )
              }
            )
          }
          <pre>{JSON.stringify(this.props.counters, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: () => {
      dispatch(c.create())
    },
    onDestroy: () => {
      dispatch(c.destroy())
    },
    onIncrement: (id) => {
      dispatch(c.increment(id))
    },
    onDecrement: (id) => {
      dispatch(c.decrement(id))
    },
    onReset: (id) => {
      dispatch(c.reset(id))
    },
    onIncrementAsync: (id) => {
      dispatch(c.incrementAsync(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList)
