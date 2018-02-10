import React from 'react'
import DisplayStars from '../../containers/displayStars/displayStarsContainer'

class HomePageRoute extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the Homepage</h1>
        <DisplayStars />
      </div>
    )
  }
}
export default HomePageRoute
