import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Picker/PICK'
const UPDATE = 'Picker/UPDATE'
const NEXT_STEP = 'Picker/NEXT_STEP'
const RESET = 'Picker/RESET'
const RANDOM = 'Picker/RANDOM'

export const actions = {
  PICK,
  UPDATE,
  NEXT_STEP,
  RESET,
  RANDOM
}

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE),
  nextStep: createAction(NEXT_STEP),
  reset: createAction(RESET),
  random: createAction(RANDOM)
}
