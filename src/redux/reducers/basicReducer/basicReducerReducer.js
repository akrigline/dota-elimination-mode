import { handleActions } from 'redux-actions'
import {
  actions as myActions,
  actionCreators as myActionCreators
} from './basicReducerActions'

export const actionCreators = myActionCreators
export const actions = myActions

export const initialState = {
  count: 0,
  time: 'no time yet'
}

export default handleActions(
  {
    [actions.INCREMENT]: (state, action) => ({
      ...state,
      count: state.count + action.payload
    }),
    [actions.DECREMENT]: (state, action) => ({
      ...state,
      count: state.count - action.payload
    }),
    [actions.SET_TIMER]: (state, action) => ({
      ...state,
      time: action.payload
    })
  },
  initialState
)
