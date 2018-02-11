import { createAction } from 'redux-actions'
// Name Spaced Action Types
const SERVER_PICK = 'server/PICK'
const PICK = 'Picker/PICK'
export const actions = {
  SERVER_PICK,
  PICK
}

export const actionCreators = {
  serverPick: createAction(SERVER_PICK),
  pick: createAction(PICK)
}
