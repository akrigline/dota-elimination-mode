import { handleActions } from 'redux-actions'
import { actions as myActions, actionCreators as myActionCreators } from './pickerActions'

export const actions = myActions
export const actionCreators = myActionCreators

export const initialState = {
  disabledHeroes: [],
  radiant: [],
  dire: []
}

export default handleActions({
  [actions.PICK]: (state, action) => {
    console.log('picking!')
    let newPickList = [...state[action.payload.team]]
    newPickList.push({
      name: action.payload.name,
      status: 'pick'
    })
    let newDisabledHeroes = [...state.disabledHeroes]
    newDisabledHeroes.push(action.payload.name)
    return {
      ...state,
      [action.payload.team]: newPickList,
      disabledHeroes: newDisabledHeroes
    }
  },
  [actions.UPDATE]: (state, action) => {
    console.log('updating')
    return {
      ...state,
      ...action.payload
    }
  },
  [actions.RESET]: (state, action) => {
    return {...initialState}
  }
}, initialState)
