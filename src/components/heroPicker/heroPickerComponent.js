import React from 'react'
import PropTypes from 'prop-types'
import changeCase from 'change-case'
import { compose, withHandlers } from 'recompose'
import styled from 'styled-components'

const HeroButtonContainer = styled.div`
  width: 100%;
`

const HeroButton = styled.button`
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
  }
  &:disabled > img {
    opacity: 0.5;
  }
`

function HeroPicker (props) {
  const snakeName = changeCase.snakeCase(props.name)
  return (
    <HeroButtonContainer>
      <HeroButton disabled={props.isDisabled} onClick={props.onClick}>
        <img
          src={require(`../../assets/dotaHeroes/${snakeName}_full.png`)}
          alt={props.name} />
      </HeroButton>
    </HeroButtonContainer>
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
