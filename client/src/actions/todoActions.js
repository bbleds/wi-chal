import * as api from '../api/database'

export function addTodo(todoText) {

	let todo = api.addTodo({text: todoText, completed: false})

  return function (dispatch) {
    return dispatch({
      type: 'ADD_TODO',
			text: todo.text,
			todoId : todo.todoId
    })
  }
}

export function toggleTodo(todoId) {

	let todo = api.toggleTodo(todoId)

  return function (dispatch) {
    return dispatch({
      type: 'TOGGLE_TODO',
			todoId
    })
  }
}
