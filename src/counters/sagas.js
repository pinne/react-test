import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

import * as c from './actionTypes'

export function* incrementAsync(action) {
  // use the call Effect
  yield call(delay, 1000)
  yield put({
    type: c.INCREMENT,
    id: action.id
  })
}

export default function* watchIncrementAsync() {
  yield takeEvery(c.INCREMENT_ASYNC, incrementAsync)
}
