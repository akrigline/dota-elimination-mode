import React from 'react'
import PropTypes from 'prop-types'
import changeCase from 'change-case'
import styled, {css} from 'styled-components'
import pickOrder from '../../assets/pickOrder'

const PickDisplayWrapper = styled.div`
  flex-basis: 20%;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 3rem;
  background-color: rgba(0, 0, 0, 0.5);
`

const PickColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  flex-basis: 40%;
  margin: 0.5rem;
  &:first-child {
    align-items: flex-end;
  }
`

const NumberColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  flex-grow: 1;
`

const Selection = styled.div`
  width: ${props => props.ban ? '75%' : '100%'};
  ${props => props.ban && css`opacity: 0.5;`}
`

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  overflow: hidden;
  > img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`

export default function PickDisplay (props) {
  const isRadiantFirstPick = props.firstPick === 'radiant'
  const radiantPicks = pickOrder.filter(pick => pick.team === (isRadiantFirstPick ? 'firstPick' : 'team2'))
  const direPicks = pickOrder.filter(pick => pick.team === (isRadiantFirstPick ? 'team2' : 'firstPick'))
  return (
    <PickDisplayWrapper>
      <PickColumn>
        <h3>Radiant</h3>
        {radiantPicks.map((pick, index) => {
          const relevantPick = props.radiant[index]
          let snakeName
          if (relevantPick) {
            snakeName = changeCase.snakeCase(relevantPick.name)
          }
          return (
            <Selection ban={pick.pickType === 'ban'}>
              <ImageWrapper>
                {relevantPick && <img
                  src={require(`../../assets/dotaHeroes/${snakeName}_full.png`)}
                  alt={relevantPick.name} />}
              </ImageWrapper>
            </Selection>
          )
        })}
      </PickColumn>
      <NumberColumn>
        {pickOrder.map((pick, index) => (
          <div>{index + 1}</div>
        ))}
      </NumberColumn>
      <PickColumn>
        <h3>Dire</h3>
        {direPicks.map((pick, index) => {
          const relevantPick = props.dire[index]
          let snakeName
          if (relevantPick) {
            snakeName = changeCase.snakeCase(relevantPick.name)
          }
          return (
            <Selection ban={pick.pickType === 'ban'}>
              <ImageWrapper>
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
