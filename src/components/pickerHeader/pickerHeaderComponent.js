import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Row, SecondaryButton} from '../../styled'
import { compose, withHandlers } from 'recompose'
import Crown from '../../assets/icons/crown.svg'
import Timer from '../../containers/timer/timerContainer'

const PickerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CrownImage = styled.img`
  width: 0.5em;
  display: inline-block;
  vertical-align: middle;
`

const TeamHeader = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 1rem;
  ${props => props.dire && css`
    color: ${props => props.theme.dire};
  `}
  ${props => props.radiant && css`
    color: ${props => props.theme.radiant};
  `}
  ${props => props.current && css`
    border-bottom-width: 0.1em;
    border-bottom-style: solid;
    ${props => props.dire
      ? css`border-bottom-color: ${props.theme.dire}`
      : css`border-bottom-color: ${props.theme.radiant}`
    }
  `}
`

export function PickerHeader (props) {
  return (
    <PickerHeaderWrapper>
      <Row>
        <TeamHeader radiant>
          Radiant {props.team && props.team === 'radiant' && <CrownImage src={Crown} />}
        </TeamHeader>
        {!props.team && <SecondaryButton onClick={props.setRadiant} radiant>Captain</SecondaryButton>}
      </Row>
      <Timer />
      <Row>
        {!props.team && <SecondaryButton onClick={props.setDire} dire>Captain</SecondaryButton>}
        <TeamHeader dire>
          {props.team && props.team === 'dire' && <CrownImage src={Crown} />} Dire
        </TeamHeader>
      </Row>
    </PickerHeaderWrapper>
  )
}

PickerHeader.propTypes = {
  team: PropTypes.string,
  setDire: PropTypes.func,
  setRadiant: PropTypes.func
}

const handlers = {
  setDire: props => () => {
    props.setTeam('dire')
  },
  setRadiant: props => () => {
    props.setTeam('radiant')
  }
}

export default compose(
  withHandlers(handlers)
)(PickerHeader)
