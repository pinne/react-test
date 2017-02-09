import { delay } from 'redux-saga'
import { put, call, takeEvery, race } from 'redux-saga/effects'
import request from 'axios'

function get(city) {
  const uri = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20'
            + 'weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20'
            + 'geo.places(1)%20where%20text%3D%22' + city + '%22)&format=json'
            + '&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  return request.get(uri)
}

function* callGetData(action) {
  const postId = action.payload
  const { data, timeout } = yield race({
    data: call(get, postId),
    timeout: call(delay, 1000)
  })

  if (data) {
    yield put({
      type: 'FETCH_DATA_SUCCESS',
      payload: data
    })
  } else {
    yield put({
      type: 'FETCH_DATA_ERROR'
    })
  }
}

export default function* getDataSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', callGetData)
}
