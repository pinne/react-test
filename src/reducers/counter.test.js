import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import counter from './counter';

const store = createStore(counter);
const create    = ()   => ({ type: 'CREATE' })
const destroy   = ()   => ({ type: 'DESTROY' })
const increment = (id) => ({ type: 'INCREMENT', id: id })
const decrement = (id) => ({ type: 'DECREMENT', id: id })
const reset     = (id) => ({ type: 'RESET', id: id })

it('should create an empty store', () => {
  const stateBefore = {}
  expect(
    counter(undefined, {})
  ).toEqual(
    {
      listById: {},
      listAllIds: []
    }
  )
});

it('should add a counter id', () => {
  expect(
    counter(undefined, create())
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
    counter(stateBefore, destroy())
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
    counter(stateBefore, increment(2))
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
    counter(stateBefore, decrement(1))
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
    counter(stateBefore, reset(1))
  ).toEqual(stateAfter)
})
