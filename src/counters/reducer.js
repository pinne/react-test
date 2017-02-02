import { combineReducers } from 'redux'
import * as c from './actionTypes'
import _ from 'lodash'

const allIds = (state = [], action) => {
  switch (action.type) {
    case c.CREATE:
      return state.concat(state.length+1)
    case c.DESTROY:
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
    case c.CREATE:
      return {
        ...state,
        [objectLength(state)+1]: {
          value: 0
        }
      }
    case c.DESTROY:
      return _.omit(state, objectLength(state))
    case c.INCREMENT:
      return {
        ...state,
        [action.id]: {
          value: state[action.id].value + 1
        }
      }
    case c.DECREMENT:
      return {
        ...state,
        [action.id]: {
          value: state[action.id].value - 1
        }
      }
    case c.RESET:
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
