import React from 'react'
import HeroGrid from './heroGridComponent'
import {shallow} from 'enzyme'

it('should call onClick', () => {
  const onClickMock = jest.fn()
  const heroGrid = shallow(<HeroGrid onClick={onClickMock} />)
  heroGrid.find('button').simulate('click')
  expect(onClickMock.mock.calls.length).toBe(1)
})
