import { createAction } from 'redux-actions'
// Name Spaced Action Types
export const INCREMENT = 'BasicReducer/INCREMENT'
export const DECREMENT = 'BasicReducer/DECREMENT'
export const SET_TIMER = 'BasicReducer/SET_TIMER'
export const SUBSCRIBE_TO_TIMER = 'server/SUBSCRIBE_TO_TIMER'
export const SERVER_INCREMENT = 'server/INCREMENT'
export const SERVER_DECREMENT = 'server/DECREMENT'

export const actions = {
  INCREMENT,
  DECREMENT,
  SET_TIMER,
  SUBSCRIBE_TO_TIMER,
  SERVER_INCREMENT,
  SERVER_DECREMENT
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
  setTimer: createAction(SET_TIMER),
  subscribeToTimer: createAction(SUBSCRIBE_TO_TIMER),
  serverIncrement: createAction(SERVER_INCREMENT),
  serverDecrement: createAction(SERVER_DECREMENT)
}
