import React from 'react'
import PropTypes from 'prop-types'

export default function HeroGrid (props) {
  return (
    <div>
      <p>{props.count} Things!</p>
    </div>
  )
}

HeroGrid.propTypes = {
  count: PropTypes.number
}
