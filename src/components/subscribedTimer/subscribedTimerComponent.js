import React from 'react'
import PropTypes from 'prop-types'

export default function SubscribedTimer (props) {
  return (
    <p>
      {props.time}
    </p>
  )
}

SubscribedTimer.propTypes = {
  time: PropTypes.any
}
