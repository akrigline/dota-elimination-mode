import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Picker/PICK'
const UPDATE = 'Picker/UPDATE'
export const actions = {
  PICK,
  UPDATE
}

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE)
}