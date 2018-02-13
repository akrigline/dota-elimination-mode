import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './routes/root/rootRoute'
import registerServiceWorker from './registerServiceWorker'
import createReduxStore from './redux/store'
import {ThemeProvider} from 'styled-components'
import theme from './styled'
import './normalize.css'
import './stylesheet.css'

const store = createReduxStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
}

render(Root)

registerServiceWorker()
