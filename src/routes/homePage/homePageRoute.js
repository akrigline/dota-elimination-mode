import React from 'react'
// import DisplayTime from '../../containers/subscribeToTimer/subscribeToTimerContainer'
import HeroGrid from '../../components/heroGrid/heroGridComponent'
import ResetButton from '../../containers/resetButton/resetButtonContainer'

class HomePageRoute extends React.Component {
  render () {
    return (
      <div>
        <HeroGrid />
        <ResetButton>Reset</ResetButton>
      </div>
    )
  }
}
export default HomePageRoute
