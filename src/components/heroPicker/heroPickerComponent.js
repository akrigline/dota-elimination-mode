import React from 'react'
import PropTypes from 'prop-types'
import changeCase from 'change-case'
import { compose, withHandlers, pure } from 'recompose'
import styled, {css} from 'styled-components'
import {AspectRatioImage} from '../../styled'
import { triggerReset } from '../../services/api'

const HeroButton = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  margin: 0;
  display: block;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  transform: scale(1);
  transition: transform 300ms;
  img {
    ${props => props.hasBeenPicked && css`opacity: 0.25`}
  }
`

function HeroPicker (props) {
  const snakeName = changeCase.snakeCase(props.name)
  return (
    <HeroButton
      disabled={props.isDisabled || props.hasBeenPicked} // This will be determined by whose turn it is.
      hasBeenPicked={props.hasBeenPicked}
      onClick={props.onClick}>
      <AspectRatioImage ratio='200%'>
        <img
          src={require(`../../assets/dotaHeroesTall/${snakeName}_tall.jpg`)}
          alt={props.name} />
      </AspectRatioImage>
    </HeroButton>
  )
}

HeroPicker.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  isDisabled: PropTypes.bool,
  hasBeenPicked: PropTypes.bool,
  pickType: PropTypes.string,
  nextStep: PropTypes.func,
  pick: PropTypes.func
}

const handlers = {
  onClick: props => () => {
    props.pick({
      name: props.name,
      team: props.team,
      pickType: props.pickType
    })
    triggerReset()
    props.nextStep()
  }
}

export default compose(pure, withHandlers(handlers))(HeroPicker)
