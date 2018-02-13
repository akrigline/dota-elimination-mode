import React from 'react'
import PickDisplay from './pickDisplayComponent'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const pickDisplay = shallow(<PickDisplay onClick={onClickMock} />)
  pickDisplay.find('button').simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
