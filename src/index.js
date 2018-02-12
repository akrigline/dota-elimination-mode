import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './routes/root/rootRoute'
import registerServiceWorker from './registerServiceWorker'
import createReduxStore from './redux/store'
import './normalize.css'

const store = createReduxStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(Root)

registerServiceWorker()
