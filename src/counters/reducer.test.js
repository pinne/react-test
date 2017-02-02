import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import * as c from './actions'

const store = createStore(reducer);

it('should create an empty store', () => {
  const stateBefore = {}
  expect(
    reducer(undefined, {})
  ).toEqual(
    {
      listById: {},
      listAllIds: []
    }
  )
});

it('should add a counter id', () => {
  expect(
    reducer(undefined, c.create())
  ).toEqual(
    {
      listById: {
        1: { value: 0 }
      },
      listAllIds: [1],
    }
  )
})

it('should remove a counter id', () => {
  const stateBefore = {
    listById: {
      1: { value: 42 },
      2: { value: 666 },
      3: { value: 99 },
    },
    listAllIds: [1, 2, 3],
  }
  const stateAfter = {
    listById: {
      1: { value: 42 },
      2: { value: 666 },
    },
    listAllIds: [1, 2],
  }
  expect(
    reducer(stateBefore, c.destroy())
  ).toEqual(stateAfter)
})

it('should increment counter #2', () => {
  const stateBefore = {
    listById: {
      1: { value: 42 },
      2: { value: 666 },
    },
    listAllIds: [1, 2],
  }
  const stateAfter = {
    listById: {
      1: { value: 42 },
      2: { value: 667 },
    },
    listAllIds: [1, 2],
  }
  expect(
    reducer(stateBefore, c.increment(2))
  ).toEqual(stateAfter)
})

it('should decrement counter #1', () => {
  const stateBefore = {
    listById: {
      1: { value: 42 },
      2: { value: 666 },
    },
    listAllIds: [1, 2],
  }
  const stateAfter = {
    listById: {
      1: { value: 41 },
      2: { value: 666 },
    },
    listAllIds: [1, 2],
  }
  expect(
    reducer(stateBefore, c.decrement(1))
  ).toEqual(stateAfter)
})

it('should reset first counter', () => {
  const stateBefore = {
    listById: {
      1: { value: 42 },
      2: { value: 666 },
    },
    listAllIds: [1, 2],
  }
  const stateAfter = {
    listById: {
      1: { value: 0 },
      2: { value: 666 },
    },
    listAllIds: [1, 2],
  }
  expect(
    reducer(stateBefore, c.reset(1))
  ).toEqual(stateAfter)
})
