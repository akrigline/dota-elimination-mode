import { createAction } from 'redux-actions'
// Name Spaced Action Types
export const INCREMENT = 'BasicReducer/INCREMENT'
export const DECREMENT = 'BasicReducer/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}
