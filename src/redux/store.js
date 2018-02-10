import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
// create the saga middleware

export default function createReduxStore (name, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware))
  let store = createStore(reducers, initialState, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}
