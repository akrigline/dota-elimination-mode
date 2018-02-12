import { handleActions } from 'redux-actions'
import { actions as myActions, actionCreators as myActionCreators } from './uiActions'

export const actions = myActions
export const actionCreators = myActionCreators

export const initialState = {
  team: null
}

export default handleActions({
  [actions.SET_TEAM]: (state, action) => ({
    ...state,
    team: action.payload
  })
}, initialState)
