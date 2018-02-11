import React from 'react'
// import DisplayTime from '../../containers/subscribeToTimer/subscribeToTimerContainer'
import HeroGrid from '../../components/heroGrid/heroGridComponent'

class HomePageRoute extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the Homepage</h1>
        <HeroGrid />
      </div>
    )
  }
}
export default HomePageRoute
