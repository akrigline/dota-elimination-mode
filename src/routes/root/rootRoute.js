import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppWrapper from '../../components/appWrapper/appWrapperComponent'
import HomeRoute from '../home/homeRoute'
import SmartUpdateHome from '../../containers/update/updateContainer'

export default class Root extends Component {
  render () {
    return (
      <AppWrapper>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={HomeRoute} />
            <Route path='/:id' component={SmartUpdateHome} />
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    )
  }
}
