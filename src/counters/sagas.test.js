import { put, call }  from 'redux-saga/Effects'
import { delay }  from 'redux-saga'

import { incrementAsync } from './sagas'
import * as c from './actions'

describe('redux-sagas test', () => {
  const gen = incrementAsync()

  it('should call delay(1000) on incrementAsync', () => {
    expect(
      gen.next().value
    ).toEqual(call(delay, 1000))
  })

})
