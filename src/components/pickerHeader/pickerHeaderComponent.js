import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Button} from '../../styled'
import { compose, withHandlers } from 'recompose'

const PickerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TeamHeader = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  ${props => props.dire && css`
    color: ${props => props.theme.dire};
  `}
  ${props => props.radiant && css`
    color: ${props => props.theme.radiant}
  `}
  ${props => props.current && css`
    border-bottom: 0.1em solid ${props => props.dire ? props.theme.dire : props.theme.radiant}
  `}
`

export function PickerHeader (props) {
  return (
    <PickerHeaderWrapper>
      {!props.team
        ? <Button onClick={props.setRadiant} radiant>Radiant</Button>
        : <TeamHeader radiant current={props.team === 'radiant'}>Radiant</TeamHeader>
      }
      {!props.team
        ? <Button onClick={props.setDire} dire>Dire</Button>
        : <TeamHeader dire current={props.team === 'dire'}>Dire</TeamHeader>
      }
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
