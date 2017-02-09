import watchIncrementAsync from './counters/sagas'
import getDataSaga from './weather/sagas'

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    getDataSaga(),
  ]
}