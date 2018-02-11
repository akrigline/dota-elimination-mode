import { handleActions } from 'redux-actions'
import { actions as myActions, actionCreators as myActionCreators } from './<%= camelEntityName %>Reducer'

export const actions = myActions
export const actionCreators = myActionCreators

export const initialState = {
  count: 0
}

export default handleActions({
  [actions.INCREMENT]: (state, action) =>
    ({...state, count: state.count + action.payload}),
  [actions.DECREMENT]: (state, action) =>
    ({...state, count: state.count - action.payload})
}, initialState)
