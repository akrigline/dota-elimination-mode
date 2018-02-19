import React from 'react'
import Timer from './timerComponent'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const timer = shallow(<Timer onClick={onClickMock} />)
  timer.find('button').simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
