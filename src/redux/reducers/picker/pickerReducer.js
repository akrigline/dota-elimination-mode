import { handleActions } from 'redux-actions'
import { actions as myActions, actionCreators as myActionCreators } from './pickerActions'

export const actions = myActions
export const actionCreators = myActionCreators

export const initialState = {
  firstPick: 'dire',
  disabledHeroes: [],
  radiant: [],
  dire: [],
  step: 0
}

export default handleActions({
  [actions.PICK]: (state, action) => {
    let newPickList = [...state[action.payload.team]]
    newPickList.push({
      name: action.payload.name,
      pickType: action.payload.pickType
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
  [actions.NEXT_STEP]: (state, action) => {
    return {
      ...state,
      step: state.step + 1
    }
  },
  [actions.RESET]: (state, action) => {
    return {...initialState}
  }
}, initialState)
