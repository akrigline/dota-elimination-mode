import React, { Component } from 'react'
import { Title } from '../../styled'
import styled from 'styled-components'

class AppWrapper extends Component {
  render () {
    const AppWrapper = styled.div`
      background-image: url(${require('../../assets/images/background.png')});
      background-size: cover;
      min-height: 100vh;
      width: 100vw;
      max-width:100%;
      overflow: auto;
    `
    return (
      <AppWrapper>
        <Title>Elimination Mode</Title>
        {this.props.children}
      </AppWrapper>
    )
  }
}

export default AppWrapper
