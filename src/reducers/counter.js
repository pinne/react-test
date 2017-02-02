import { combineReducers } from 'redux'
import _ from 'lodash'

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(state.length+1)
    case 'DESTROY':
      return state.slice(0, state.length-1)
    default:
      return state
  }
}

const objectLength = o => {
  if (o) return Object.keys(o).length
  else   return 0
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        [objectLength(state)+1]: {
          value: 0
        }
      }
    case 'DESTROY':
      return _.omit(state, objectLength(state))
    case 'INCREMENT':
      return {
        ...state,
        [action.id]: {
          value: state[action.id].value + 1
        }
      }
    case 'DECREMENT':
      return {
        ...state,
        [action.id]: {
          value: state[action.id].value - 1
        }
      }
    case 'RESET':
      return {
        ...state,
        [action.id]: {
          value: 0
        }
      }
    default:
      return state
  }
}

const counter = combineReducers({
  listAllIds: allIds,
  listById: byId,
})

export default counter
