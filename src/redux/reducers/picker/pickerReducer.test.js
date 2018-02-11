import pickerReducer, {actions, actionCreators} from './pickerReducer'

it('should create increment actions', () => {
  expect(actionCreators.increment(1)).toEqual({type: actions.INCREMENT, payload: 1})
})
it('should create decrement actions', () => {
  expect(actionCreators.decrement(1)).toEqual({type: actions.DECREMENT, payload: 1})
})

it('should reduce increments', () => {
  expect(pickerReducer({count: 5}, actionCreators.increment(1))).toEqual({count: 6})
})
it('should reduce decrements', () => {
  expect(pickerReducer({count: 5}, actionCreators.decrement(2))).toEqual({count: 3})
})