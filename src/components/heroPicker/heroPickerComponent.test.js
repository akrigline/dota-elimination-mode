import React from 'react'
import HeroPicker from './heroPickerComponent'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const heroPicker = shallow(<HeroPicker onClick={onClickMock} />)
  heroPicker.find('button').simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
