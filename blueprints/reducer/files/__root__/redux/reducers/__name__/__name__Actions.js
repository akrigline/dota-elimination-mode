import { createAction } from 'redux-actions'
// Name Spaced Action Types
const INCREMENT = '<%= pascalEntityName %>/INCREMENT'
const DECREMENT = '<%= pascalEntityName %>/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}
