import { combineReducers } from 'redux'

const INITIAL_STATE = 'No data available'

const text = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return 'Fetching data'
    case 'FETCH_DATA_SUCCESS':
      return action.payload
    case 'FETCH_DATA_ERROR':
      return 'Could not fetch data'
    default:
      return state
  }
}

const weather = combineReducers({
  text,
})

export default weather
