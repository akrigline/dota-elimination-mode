import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Server/PICK'
const UPDATE = 'Server/UPDATE'
const RESET = 'Server/RESET'

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE),
  reset: createAction(RESET)
}
