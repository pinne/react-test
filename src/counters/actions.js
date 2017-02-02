import * as c from './actionTypes'

export const create    = ()   => ({ type: c.CREATE })
export const destroy   = ()   => ({ type: c.DESTROY })
export const increment = (id) => ({ type: c.INCREMENT, id })
export const decrement = (id) => ({ type: c.DECREMENT, id })
export const reset     = (id) => ({ type: c.RESET, id })
