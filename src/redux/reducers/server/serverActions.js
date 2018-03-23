import { createAction } from 'redux-actions'
// Name Spaced Action Types
const PICK = 'Server/PICK'
const UPDATE = 'Server/UPDATE'
const NEXT_STEP = 'Server/NEXT_STEP'
const RESET = 'Server/RESET'
const SET_FIRST_PICK = 'Server/SET_FIRST_PICK'

export const actionCreators = {
  pick: createAction(PICK),
  update: createAction(UPDATE),
  nextStep: createAction(NEXT_STEP),
  reset: createAction(RESET),
  setFirstPick: createAction(SET_FIRST_PICK)
}
