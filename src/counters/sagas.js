import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'

import * as c from './actionTypes'

export function* incrementAsync(action) {
  // use the call Effect
  yield call(delay, 1000)
  yield put({
    type: c.INCREMENT,
    id: action.id
  })
}

export function* watchIncrementAsync() {
  yield takeEvery(c.INCREMENT_ASYNC, incrementAsync)
}

export function* getData() {
  yield call()
}

export function* watchGetData() {
  yield takeEvery({
    type: 'FETCH_DATA'
  }, incrementAsync)
}


export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
  ]
}
