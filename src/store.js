import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import counter from './state/counter'
import randomUsers from './state/randomUsers'

const reducer = combineReducers({
  counter,
  randomUsers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)