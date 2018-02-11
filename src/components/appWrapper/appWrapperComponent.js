import React, { Component } from 'react'

class AppWrapper extends Component {
  render () {
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default AppWrapper
