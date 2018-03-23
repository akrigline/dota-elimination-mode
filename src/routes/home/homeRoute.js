import React from 'react'
import styled, {css} from 'styled-components'
import {hri} from 'human-readable-ids'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
`

const StyledLink = styled(Link)`
  border: none;
  color: white;
  border-radius: 0.2rem;
  ${
    props => (props.dire || props.radiant)
    ? css`
      background-color: ${props => props.dire
        ? props.theme.dire
        : props.theme.radiant
      }
    `
    : css`
      background-color: transparent;
    `
  }
`

class HomeRoute extends React.Component {
  render () {
    const randomAnimals = hri.random()
    return (
      <Wrapper>
        {randomAnimals && <StyledLink to={`/${randomAnimals}`}>Start a New Game</StyledLink>}
        <p>To join a current game, ask your friends for the link.</p>
      </Wrapper>
    )
  }
}

export default HomeRoute
