import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSocketIoMiddleware from 'redux-socket.io'
import openSocket from 'socket.io-client'
// create the saga middleware
function optimisticExecute (action, emit, next, dispatch) {
  emit('action', action)
  const optimisticAction = {
    ...action,
    type: 'Picker/' + action.type.split('/')[1]
  }
  dispatch(optimisticAction)
}

export default function createReduxStore (name, initialState = {}) {
  // const sagaMiddleware = createSagaMiddleware()
  const socket = openSocket('/')
  const socketIoMiddleware = createSocketIoMiddleware(socket, 'Server/', { execute: optimisticExecute })
  const middleware = composeWithDevTools(applyMiddleware(socketIoMiddleware))
  let store = createStore(reducers, initialState, middleware)
  // sagaMiddleware.run(rootSaga)
  return store
}
