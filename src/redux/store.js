import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSocketIoMiddleware from 'redux-socket.io'
import openSocket from 'socket.io-client'
// create the saga middleware

export default function createReduxStore (name, initialState = {}) {
  // const sagaMiddleware = createSagaMiddleware()
  const socket = openSocket('http://localhost:8000')
  const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/')
  const middleware = composeWithDevTools(applyMiddleware(socketIoMiddleware))
  let store = createStore(reducers, initialState, middleware)
  // sagaMiddleware.run(rootSaga)
  return store
}
