import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Picker/PICK'
const UPDATE = 'Picker/UPDATE'
const RESET = 'Picker/RESET'

export const actions = {
  PICK,
  UPDATE,
  RESET
}

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE),
  reset: createAction(RESET)
}
