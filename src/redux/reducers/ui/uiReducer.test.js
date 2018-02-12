import uiReducer, {actions, actionCreators} from './uiReducer'

it('should create increment actions', () => {
  expect(actionCreators.increment(1)).toEqual({type: actions.INCREMENT, payload: 1})
})
it('should create decrement actions', () => {
  expect(actionCreators.decrement(1)).toEqual({type: actions.DECREMENT, payload: 1})
})

it('should reduce increments', () => {
  expect(uiReducer({count: 5}, actionCreators.increment(1))).toEqual({count: 6})
})
it('should reduce decrements', () => {
  expect(uiReducer({count: 5}, actionCreators.decrement(2))).toEqual({count: 3})
})