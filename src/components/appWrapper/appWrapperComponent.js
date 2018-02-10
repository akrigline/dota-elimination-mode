import React, { Component } from 'react'
import styles from './appWrapperComponent.scss'

class AppWrapper extends Component {
  render () {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default AppWrapper
