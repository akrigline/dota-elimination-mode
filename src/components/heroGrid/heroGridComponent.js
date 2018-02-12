import React from 'react'
import PropTypes from 'prop-types'
import heroJson from '../../assets/heroes.json'
import HeroPicker from '../../containers/heroPicker/heroPickerContainer'
import styled from 'styled-components'

const HeroGridDisplay = styled.section`
  display: grid;
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.5em;
  margin: 0.5em;
`

export default function HeroGrid (props) {
  return (
    <div>
      {Object.keys(heroJson).map(attribute => (
        <HeroGridDisplay key={attribute}>
          {heroJson[attribute].map(hero => (
            <HeroPicker name={hero.name} key={hero.name} />
          ))}
        </HeroGridDisplay>
      ))}
    </div>
  )
}

HeroGrid.propTypes = {
  count: PropTypes.number
}
