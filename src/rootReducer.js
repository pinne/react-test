import { combineReducers } from 'redux'

import counters from './counters'
import weather from './weather'

export default combineReducers({
  [counters.constants.NAME]: counters.reducer,
  weather: weather.reducer
})
