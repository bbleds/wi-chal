import * as api from '../api/database'

// ** Export Methods **

// handles adding a new todo and persisting to storage
export function addTodo(todoText){
	return function (dispatch) {
		return dispatch({
			type: 'ADD_TODO',
			payload: todoText
		})
	}
}


// handles toggling the completed property of a single todo item by id
export function toggleTodo(todoId){
	return function (dispatch) {
		return dispatch({
			type: 'TOGGLE_TODO',
			payload: todoId
		})
	}
}

// handles filtering the viewable todos by user-selected filter
export function setTodosVisibilty(val){
	return function (dispatch) {
		return dispatch({
			type: 'SET_TODOS_VISIBILITY',
			payload: val
		})
	}
}

// general usage for creating error messages
export function generateError(msg) {
  return function (dispatch) {
    return dispatch({
      type: 'GENERATE_ERROR_SUCCESS',
			payload: msg
    })
  }
}

// general usage for clearing existing errors
export function cleanErrors(value) {
  return function (dispatch) {
    return dispatch({
      type: 'CLEAN_ERRORS_SUCCESS'
    })
  }
}
