import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppWrapper from '../../components/appWrapper/appWrapperComponent'
import Home from '../homePage/homePageRoute'

export default class Root extends Component {
  constructor () {
    super()

    this.views = {}
  }

  render () {
    return (
      <AppWrapper>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    )
  }
}
