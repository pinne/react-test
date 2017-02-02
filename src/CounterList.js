import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterView from './CounterView'

//actions
const increment = (id) => ({ type: 'INCREMENT', id })
const decrement = (id) => ({ type: 'DECREMENT', id })
const reset     = (id) => ({ type: 'RESET', id })
const create    = ()   => ({ type: 'CREATE' })
const destroy   = ()   => ({ type: 'DESTROY' })

class CounterList extends Component {
  render() {
    return (
      <div className="container">
        <button onClick={this.props.onCreate}>Add container</button>
        <button onClick={this.props.onDestroy}>Remove container</button>
        <div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
          {this.props.listAllIds.map(
            id => {
              return (
                <CounterView
                  key={id}
                  id={id}
                  value={this.props.listById[id].value}
                  increment={() => this.props.onIncrement(id)}
                  decrement={() => this.props.onDecrement(id)}
                  reset={    () => this.props.onReset(id)}
                  />
              )
            }
          )}
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
      dispatch(create())
    },
    onDestroy: () => {
      dispatch(destroy())
    },
    onIncrement: (id) => {
      dispatch(increment(id))
    },
    onDecrement: (id) => {
      dispatch(decrement(id))
    },
    onReset: (id) => {
      dispatch(reset(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList)
