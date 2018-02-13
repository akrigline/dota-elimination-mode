import React from 'react'
// import DisplayTime from '../../containers/subscribeToTimer/subscribeToTimerContainer'
import HeroGrid from '../../containers/heroGrid/heroGridContainer'
import PickerHeader from '../../containers/pickerHeader/pickerHeaderContainer'
import ResetButton from '../../containers/resetButton/resetButtonContainer'

class HomePageRoute extends React.Component {
  render () {
    return (
      <div>
        <PickerHeader />
        <HeroGrid />
        <ResetButton>Reset</ResetButton>
      </div>
    )
  }
}
export default HomePageRoute
