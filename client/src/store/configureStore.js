import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createLogicMiddleware } from 'redux-logic'
import rootReducer from '../reducers'
import appLogic from '../logic'

function configureStore(initialState) {
  const middlewares = [ thunk, createLogicMiddleware(appLogic) ]
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))
}

export default configureStore
