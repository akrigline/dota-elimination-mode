import React from 'react'
import PropTypes from 'prop-types'
import { subscribeToTime, startTimer, subscribeToRandom } from '../../services/api'
import heroJson from '../../assets/heroes.json'
import pickOrder from '../../assets/pickOrder'
import styled from 'styled-components'
import {Button, Row} from '../../styled'

const DireReserve = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em;
  color: ${props => props.theme.dire}
`

const RadiantReserve = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em;
  color: ${props => props.theme.radiant}
`

const Countdown = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5em;
  color: white;
`

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: null
    }

    subscribeToTime((err, time) => {
      if (err) {
        console.log(err)
      }
      console.log(time)
      this.setState({
        time
      })
    })
  }

  randomCallback (err, team) {
    if (err) {
      console.log(err)
    }

    const heroValues = Object.values(heroJson)
    const heroesConcat = heroValues[0].concat(heroValues[1], heroValues[2])
    const heroesFiltered = heroesConcat.filter(hero => {
      return !this.props.disabledHeroes.includes(hero.name)
    })
    const chosen = heroesFiltered[Math.floor(Math.random() * heroesFiltered.length)]
    let teamToPick
    if (team === 'firstPick') {
      teamToPick = this.props.firstPick
    } else {
      teamToPick = this.props.firstPick === 'dire' ? 'radiant' : 'dire'
    }

    if (this.props.pick) {
      this.props.pick({ // This will pick a random hero on each individual client and bombard the server with that pick.
        name: chosen.name,
        team: teamToPick,
        pickType: this.props.pickType
      })
      this.props.nextStep()
    }
  }

  componentDidMount () {
    subscribeToRandom((err, team) => this.randomCallback(err, team))
  }

  render () {
    if (this.state.time) {
      const currentStep = pickOrder[this.props.step]
      const teamThatIsPicking = currentStep.team === 'firstPick' ? this.props.firstPick : (this.props.firstPick === 'dire' ? 'radiant' : 'dire')

      const direReserve = this.props.firstPick === 'dire' ? this.state.time.reserve.firstPick : this.state.time.reserve.team2
      const radiantReserve = this.props.firstPick === 'radiant' ? this.state.time.reserve.firstPick : this.state.time.reserve.team2
      return (
        <Row grow>
          <RadiantReserve current={teamThatIsPicking === 'radiant'}>{radiantReserve > 0 ? radiantReserve : 0}</RadiantReserve>
          <Countdown>{this.state.time.countdown}</Countdown>
          <DireReserve current={teamThatIsPicking === 'dire'}>{direReserve > 0 ? direReserve : 0}</DireReserve>
        </Row>
      )
    } else {
      return (
        <div>
          {this.props.team && <Button
            radiant={this.props.firstPick === 'radiant'}
            dire={this.props.firstPick === 'dire'}
            onClick={() => {
              startTimer()
              this.props.nextStep()
            }}>
            Start
          </Button>}
        </div>
      )
    }
  }
}

Timer.propTypes = {

}
export default Timer
