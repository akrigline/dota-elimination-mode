import React from 'react'
import PropTypes from 'prop-types'
import changeCase from 'change-case'
import { compose, withHandlers } from 'recompose'
import styled, {css} from 'styled-components'

const HeroButtonContainer = styled.div`
  width: 100%;
`

const HeroButton = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  width: 100%;
  margin: 0;
  display: block;
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
  transform: scale(1);
  transition: transform 300ms;
  > img {
    height: 100%;
    position: absolute;
    top: 0;
    left: -50%;
    right: 0;
    bottom: 0;
    margin: auto;
    ${props => props.hasBeenPicked && css`opacity: 0.25`}
  }
`

function HeroPicker (props) {
  const snakeName = changeCase.snakeCase(props.name)
  const isDisabled = !props.team
  return (
    <HeroButtonContainer>
      <HeroButton
        disabled={isDisabled} // This will be determined by whose turn it is.
        hasBeenPicked={props.hasBeenPicked}
        onClick={props.onClick}>
        <img
          src={require(`../../assets/dotaHeroes/${snakeName}_full.png`)}
          alt={props.name} />
      </HeroButton>
    </HeroButtonContainer>
  )
}

HeroPicker.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  hasBeenPicked: PropTypes.bool,
  pick: PropTypes.func
}

const handlers = {
  onClick: props => () => {
    props.pick({
      name: props.name,
      team: props.team
    })
  }
}

export default compose(withHandlers(handlers))(HeroPicker)
