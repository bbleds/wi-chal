import * as api from '../api/database'
import * as types from '../constants'

// ** Export Methods **

// handles adding a new todo and persisting to storage
export function addTodo(todoText){
	return function (dispatch) {
		return dispatch({
			type: types.ADD_TODO,
			payload: todoText
		})
	}
}


// handles toggling the completed property of a single todo item by id
export function toggleTodo(todoId){
	return function (dispatch) {
		return dispatch({
			type: types.TOGGLE_TODO,
			payload: todoId
		})
	}
}

// handles filtering the viewable todos by user-selected filter
export function setTodosVisibilty(val){
	return function (dispatch) {
		return dispatch({
			type: types.SET_TODOS_VISIBILITY,
			payload: val
		})
	}
}

// general usage for creating error messages
export function generateError(msg) {
  return function (dispatch) {
    return dispatch({
      type: types.GENERATE_ERROR,
			payload: msg
    })
  }
}

// general usage for clearing existing errors
export function cleanErrors() {
  return function (dispatch) {
    return dispatch({
      type: types.CLEAN_ERRORS
    })
  }
}

// used to set an input field value on state
export function setTodoFormInputValue(val, field) {
  return function (dispatch) {
    return dispatch({
      type: types.SET_ADD_TODO_INPUT,
			payload: { val, field }
    })
  }
}

// used to set an input field value on state
export function clearFormInputs() {
  return function (dispatch) {
    return dispatch({
      type: types.CLEAR_ADD_TODO_INPUTS
    })
  }
}
