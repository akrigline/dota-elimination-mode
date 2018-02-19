import styled, {css} from 'styled-components'

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-color: white;
`

export const Button = styled.button`
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

export const SecondaryButton = styled.button`
  border-wdith: 1px;
  border-style: solid;
  background: none;
  border-radius: 0.2rem;
  ${
    props => (props.dire || props.radiant)
    ? css`
      border-color: ${props => props.dire
        ? props.theme.dire
        : props.theme.radiant
      };
      color: ${props => props.dire
        ? props.theme.dire
        : props.theme.radiant
      };
    `
    : css`
      border-color: white;
      color: white;
    `
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.grow && css`
    flex-grow: 1;
    justify-content: space-between;
  `}
`

export const AspectRatioImage = styled.div`
  width: 100%;
  display: block;
  position: relative;
  padding-bottom: ${props => props.ratio};
  overflow: hidden;
  ${props => props.css && props.css}
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

const theme = {
  radiant: 'rgb(91, 198, 92)',
  dire: 'rgb(167, 77, 59)'
}

export default theme
