import React from 'react'
import PropTypes from 'prop-types'
import heroJson from '../../assets/heroes.json'
import HeroPicker from '../../containers/heroPicker/heroPickerContainer'
import styled from 'styled-components'
import pickOrder from '../../assets/pickOrder'

const AttributeRow = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`

const AttributeTitle = styled.header`
  width: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  margin-right: 0.5em;
  > h3 {
    text-transform: uppercase;
    transform: rotate(-90deg);
    color: rgba(255, 255, 255, 0.25);
    font-weight: lighter;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
  }
`

const HeroGridDisplay = styled.section`
  display: grid;
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.5em;
  flex-grow: 1;
`

export default function HeroGrid (props) {
  const currentStep = pickOrder[props.step]
  const isTeamFirstPick = props.firstPick === props.team
  const isCurrentTeamPicking = isTeamFirstPick ? currentStep.team === 'firstPick' : currentStep.team === 'team2'
  const pickType = pickOrder[props.step].pickType
  const isDisabled = !props.team || !isCurrentTeamPicking
  return (
    <div>
      {Object.keys(heroJson).map(attribute => (
        <AttributeRow>
          <AttributeTitle><h3>{attribute}</h3></AttributeTitle>
          <HeroGridDisplay key={attribute}>
            {heroJson[attribute].map(hero => (
              <HeroPicker
                name={hero.name}
                key={hero.name}
                team={props.team}
                pickType={pickType}
                isDisabled={isDisabled} />
            ))}
          </HeroGridDisplay>
        </AttributeRow>
      ))}
    </div>
  )
}

HeroGrid.propTypes = {
  count: PropTypes.number,
  team: PropTypes.string,
  step: PropTypes.number
}
