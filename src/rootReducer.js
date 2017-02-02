import { combineReducers } from 'redux'

import counters from './counters'

export default combineReducers({
  [counters.constants.NAME]: counters.reducer
})
