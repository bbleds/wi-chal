import {createStore, compose, applyMiddleware} from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import rootReducer from '../reducers'
import appLogic from '../logic'

export default function(initialState) {
  const middlewares = [ createLogicMiddleware(appLogic) ]
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))
}
