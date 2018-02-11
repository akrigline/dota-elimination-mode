import React from 'react'
import PropTypes from 'prop-types'

export default function DisplayStars (props) {
  return (
    <div>
      <p>
        {props.count} Things!
      </p>
      <button onClick={() => props.increment(4)}>
        Increase
      </button>
      <button onClick={() => props.decrement(4)}>
        Decrease
      </button>
    </div>
  )
}

DisplayStars.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
}
