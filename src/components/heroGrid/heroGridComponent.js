import React from 'react'
import PropTypes from 'prop-types'
import heroJson from '../../assets/heroes.json'
import HeroPicker from '../../containers/heroPicker/heroPickerContainer'

export default function HeroGrid (props) {
  return (
    <div>
      {Object.keys(heroJson).map(attribute => (
        <section key={attribute}>
          {heroJson[attribute].map(hero => (
            <HeroPicker name={hero.name} key={hero.name} />
          ))}
        </section>
      ))}
    </div>
  )
}

HeroGrid.propTypes = {
  count: PropTypes.number
}
