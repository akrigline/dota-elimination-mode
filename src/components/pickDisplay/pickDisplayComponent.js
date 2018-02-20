import React from 'react'
import PropTypes from 'prop-types'
import changeCase from 'change-case'
import styled, {css} from 'styled-components'
import pickOrder from '../../assets/pickOrder'
import {AspectRatioImage} from '../../styled'

const PickDisplayWrapper = styled.div`
  flex-basis: 15%;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 3rem;
  background-color: rgba(0, 0, 0, 0.5);
`

const PickColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 1rem);
  margin: 0.5rem;
  &:first-child {
    align-items: flex-end;
  }
`

const ColumnHeader = styled.h3`
  margin: 0.5em 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3em;
  ${props => props.dire && css`
    color: ${props => props.theme.dire};
  `}
  ${props => props.radiant && css`
    color: ${props => props.theme.radiant};
  `}
  ${props => props.picking && css`
    box-shadow: 0 0 5px ${props => props.dire ? props.theme.dire : props.theme.radiant}
  `}
`

const Selection = styled.div`
  width: ${props => props.ban ? '60%' : '100%'};
  margin-top: ${props => props.ban ? '0.1em' : '0.5em'};
  margin-bottom: ${props => props.ban ? '0.1em' : '0.5em'};
  ${props => props.ban && css`opacity: 0.5;`}
`

const ImageWrapper = AspectRatioImage.extend`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  ${props => props.currentStep && css`border-color: white;`}
`

export default function PickDisplay (props) {
  const isRadiantFirstPick = props.firstPick === 'radiant'
  const radiantPicks = pickOrder.filter(pick => pick.team === (isRadiantFirstPick ? 'firstPick' : 'team2'))
  const direPicks = pickOrder.filter(pick => pick.team === (isRadiantFirstPick ? 'team2' : 'firstPick'))

  const currentStep = pickOrder[props.step]
  const isDirePicking = (props.firstPick === 'dire' && currentStep.team === 'firstPick') || (props.firstPick === 'radiant' && currentStep.team === 'team2')
  const isRadiantPicking = (props.firstPick === 'radiant' && currentStep.team === 'firstPick') || (props.firstPick === 'dire' && currentStep.team === 'team2')
  return (
    <PickDisplayWrapper>
      <PickColumn>
        <ColumnHeader radiant picking={isRadiantPicking}>Radiant</ColumnHeader>
        {radiantPicks.map((pick, index) => {
          const relevantPick = props.radiant[index]
          let snakeName
          if (relevantPick) {
            snakeName = changeCase.snakeCase(relevantPick.name)
          }
          return (
            <Selection ban={pick.pickType === 'ban'} key={`radiant${index}`}>
              <ImageWrapper currentStep={props.step === pick.number} ratio='56.25%'>
                {relevantPick && <img
                  src={require(`../../assets/dotaHeroes/${snakeName}_full.png`)}
                  alt={relevantPick.name} />}
              </ImageWrapper>
            </Selection>
          )
        })}
      </PickColumn>
      <PickColumn>
        <ColumnHeader dire picking={isDirePicking}>Dire</ColumnHeader>
        {direPicks.map((pick, index) => {
          const relevantPick = props.dire[index]
          let snakeName
          if (relevantPick) {
            snakeName = changeCase.snakeCase(relevantPick.name)
          }
          return (
            <Selection ban={pick.pickType === 'ban'} key={`dire${index}`}>
              <ImageWrapper currentStep={props.step === pick.number} ratio='56.25%'>
                {relevantPick && <img
                  src={require(`../../assets/dotaHeroes/${snakeName}_full.png`)}
                  alt={relevantPick.name} />}
              </ImageWrapper>
            </Selection>
          )
        })}
      </PickColumn>
    </PickDisplayWrapper>
  )
}

PickDisplay.propTypes = {
  radiant: PropTypes.array,
  dire: PropTypes.array,
  step: PropTypes.number,
  team: PropTypes.string
}
