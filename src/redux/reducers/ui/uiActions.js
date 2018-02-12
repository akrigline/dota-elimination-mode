import { createAction } from 'redux-actions'
// Name Spaced Action Types
const SET_TEAM = 'Ui/SET_TEAM'
export const actions = {
  SET_TEAM
}

export const actionCreators = {
  setTeam: createAction(SET_TEAM)
}
