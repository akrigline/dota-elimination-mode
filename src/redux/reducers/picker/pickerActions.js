import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Picker/PICK'
const UPDATE = 'Picker/UPDATE'
const NEXT_STEP = 'Picker/NEXT_STEP'
const RESET = 'Picker/RESET'

export const actions = {
  PICK,
  UPDATE,
  NEXT_STEP,
  RESET
}

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE),
  nextStep: createAction(NEXT_STEP),
  reset: createAction(RESET)
}
