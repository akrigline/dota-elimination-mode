import React from 'react'
import PickerHeader from './pickerHeaderComponent'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const pickerHeader = shallow(<PickerHeader onClick={onClickMock} />)
  pickerHeader.find('button').simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
