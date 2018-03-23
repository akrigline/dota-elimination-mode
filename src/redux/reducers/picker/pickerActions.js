import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Picker/PICK'
const UPDATE = 'Picker/UPDATE'
const NEXT_STEP = 'Picker/NEXT_STEP'
const RESET = 'Picker/RESET'
const RANDOM = 'Picker/RANDOM'
const SET_FIRST_PICK = 'Picker/SET_FIRST_PICK'

export const actions = {
  PICK,
  UPDATE,
  NEXT_STEP,
  RESET,
  RANDOM,
  SET_FIRST_PICK
}

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE),
  nextStep: createAction(NEXT_STEP),
  reset: createAction(RESET),
  random: createAction(RANDOM),
  setFirstPick: createAction(SET_FIRST_PICK)
}
