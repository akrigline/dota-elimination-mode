import React from 'react'
// import DisplayTime from '../../containers/subscribeToTimer/subscribeToTimerContainer'
import HeroGrid from '../../containers/heroGrid/heroGridContainer'
import PickerHeader from '../../containers/pickerHeader/pickerHeaderContainer'
import PickDisplay from '../../containers/pickDisplay/pickDisplayContainer'
import {Row} from '../../styled'

class PickRoute extends React.Component {
  render () {
    return (
      <div>
        <PickerHeader />
        <Row>
          <HeroGrid />
          <PickDisplay />
        </Row>
      </div>
    )
  }
}
export default PickRoute
