import {mapStateToProps, propsMapping} from './pickerHeaderContainer'
describe('pickerHeader container', () => {
  it('should map state to props', () => {
    const state = {counter: {count: 12}}
    const mappedState = mapStateToProps(state)
    expect(mappedState).toEqual({starCount: 12})
  })
  it('should have a propsMapping', () => {
    expect(typeof propsMapping.onClick).toEqual('function')
  })
})
