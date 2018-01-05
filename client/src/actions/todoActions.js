import * as api from '../api/database'

// ** Export Methods **

// handles adding a new todo and persisting to storage
export function addTodo(todoText){
	let { data, errors } = api.addTodo({text: todoText, completed: false})

	if( errors ) return generateError('An error occurred when adding a to-do. Please try again.')

	let todo = data

	return function (dispatch) {
		return dispatch({
			type: 'ADD_TODO',
			text: todo.text,
			todoId : todo.todoId
		})
	}

}

// handles toggling the completed property of a single todo item by id
export function toggleTodo(todoId) {
	let { errors } = api.toggleTodo(todoId)

	if( errors ) return generateError('An error occurred when changing the status of a to-do. Please try again.')

	return function (dispatch) {
		return dispatch({
			type: 'TOGGLE_TODO',
			todoId
		})
	}
}

// handles filtering the viewable todos by user-selected filter
export function setTodosVisibilty(value) {
	let { errors } = api.setTodosVisibilty(value)

	if( errors ) return generateError('Oops! An error occurred when filtering your to-do items. Please try again.')

	return function (dispatch) {
		return dispatch({
			type: 'SET_TODO_VISIBILITY',
			todosVisibility: value
		})
	}
}

// general usage for creating error messages
export function generateError(msg) {
  return function (dispatch) {
    return dispatch({
      type: 'GENERATE_ERROR',
			msg: msg
    })
  }
}

// general usage for clearing existing errors
export function cleanErrors(value) {
  return function (dispatch) {
    return dispatch({
      type: 'CLEAN_ERRORS'
    })
  }
}
