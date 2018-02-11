import React from 'react'
import PropTypes from 'prop-types'

export default function <%= pascalEntityName %> (props) {
  return (
    <div>
      <p>{props.count} Things!</p>
    </div>
  )
}

<%= pascalEntityName %>.propTypes = {
  count: PropTypes.number
}
