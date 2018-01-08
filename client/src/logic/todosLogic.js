import { createLogic } from 'redux-logic'
import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  GENERATE_ERROR,
  TOGGLE_TODO,
  TOGGLE_TODO_SUCCESS
} from '../constants'
import * as api from '../api/database'
import uuid from 'uuid'

const addTodoLogic = createLogic({
  type: ADD_TODO,
  process({ getState, action }, dispatch, done){
    const { payload: text } = action
    const { data, errors } = api.addTodo({text , completed: false})

    !errors ?
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: {
          text,
          todoId: uuid()
        }
      }) :
      dispatch({
        type: GENERATE_ERROR,
        payload: 'An error occurred when adding a to-do. Please try again.'
      })

    done()
  }
})

const toggleTodoLogic = createLogic({
  type: TOGGLE_TODO,
  process({ getState, action }, dispatch, done){
    const { payload } = action
    const { errors } = api.toggleTodo(payload)

    !errors ?
      dispatch({
        type: TOGGLE_TODO_SUCCESS,
        payload
      }) :
      dispatch({
        type: GENERATE_ERROR,
        payload: 'An error occurred when changing the status of a to-do. Please try again.'
      })

    done()
  }
})

export default [
  addTodoLogic,
  toggleTodoLogic
]
