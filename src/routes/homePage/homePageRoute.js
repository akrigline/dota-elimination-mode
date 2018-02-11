import React from 'react'
import DisplayStars from '../../containers/displayStars/displayStarsContainer'
// import DisplayTime from '../../containers/subscribeToTimer/subscribeToTimerContainer'
import HeroGrid from '../../components/heroGrid/heroGridComponent'
// import { subscribeToTimer } from '../../services/api'

class HomePageRoute extends React.Component {
  // constructor (props) {
  //   super(props)

  //   subscribeToTimer(1000, (err, timeStamp) => {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       this.setState({
  //         timeStamp
  //       })
  //     }
  //   }
  //   )
  //   this.state = {
  //     timeStamp: 'no timestamp yet'
  //   }
  // }

  render () {
    return (
      <div>
        <h1>This is the Homepage</h1>
        <DisplayStars />
        <HeroGrid />
      </div>
    )
  }
}
export default HomePageRoute
