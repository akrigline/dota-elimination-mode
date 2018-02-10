import { createAction, handleActions } from 'redux-actions'
// Name Spaced Action Types
const INCREMENT = 'BasicReducer/INCREMENT'
const DECREMENT = 'BasicReducer/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}

export const initialState = {
  count: 0,
  string: 'string'
}

export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      count: state.count + action.payload
    }),
    [DECREMENT]: (state, action) => ({
      ...state,
      count: state.count - action.payload
    })
  },
  initialState
)
