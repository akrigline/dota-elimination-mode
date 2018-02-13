import React from 'react'
// import DisplayTime from '../../containers/subscribeToTimer/subscribeToTimerContainer'
import HeroGrid from '../../containers/heroGrid/heroGridContainer'
import PickerHeader from '../../containers/pickerHeader/pickerHeaderContainer'
import PickDisplay from '../../containers/pickDisplay/pickDisplayContainer'
import ResetButton from '../../containers/resetButton/resetButtonContainer'
import {Row} from '../../styled'

class HomePageRoute extends React.Component {
  render () {
    return (
      <div>
        <PickerHeader />
        <Row>
          <HeroGrid />
          <PickDisplay />
        </Row>
        <ResetButton>Reset</ResetButton>
      </div>
    )
  }
}
export default HomePageRoute
