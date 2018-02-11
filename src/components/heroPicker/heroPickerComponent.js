import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'

function HeroPicker (props) {
  return (
    <button disabled={props.isDisabled} onClick={props.onClick}>
      {props.name}
    </button>
  )
}

HeroPicker.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  pick: PropTypes.func
}

const handlers = {
  onClick: props => () => {
    console.log(props)
    props.pick({
      name: props.name,
      team: 'radiant'
    })
  }
}

export default compose(withHandlers(handlers))(HeroPicker)
