import { createLogic } from 'redux-logic'
import * as api from '../api/database'
import * as types from '../constants'
import uuid from 'uuid'

const addTodoLogic = createLogic({
	type: types.ADD_TODO,
	process({ getState, action }, dispatch, done){
		const { payload } = action
		const { data, errors } = api.addTodo({text: payload , completed: false})

		!errors ?
			dispatch({
				type: 'ADD_TODO_SUCCESS',
				text: payload,
				todoId: uuid()
			}) :
			dispatch({
				type: 'GENERATE_ERROR',
				payload: 'An error occurred when adding a to-do. Please try again.'
			})

		done()
	}
})

const toggleTodoLogic = createLogic({
	type: types.TOGGLE_TODO,
	process({ getState, action }, dispatch, done){
		const { payload } = action
		const { errors } = api.toggleTodo(payload)

		!errors ?
			dispatch({
				type: 'TOGGLE_TODO_SUCCESS',
				todoId: payload
			}) :
			dispatch({
				type: 'GENERATE_ERROR',
				payload: 'An error occurred when changing the status of a to-do. Please try again.'
			})

		done()
	}
})

export default [
  addTodoLogic,
	toggleTodoLogic
]
