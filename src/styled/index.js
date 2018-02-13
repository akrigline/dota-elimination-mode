import styled, {css} from 'styled-components'

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-color: white;
`

export const Button = styled.button`
  border: none;
  color: white;
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

const theme = {
  radiant: 'rgb(91, 198, 92)',
  dire: 'rgb(167, 77, 59)'
}

export default theme
