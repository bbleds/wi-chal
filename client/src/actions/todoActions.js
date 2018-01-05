import * as api from '../api/database'

export function addTodo(todoText) {

	api.addTodo({text: todoText, completed: false})

  return function (dispatch) {
    return dispatch({
      type: 'ADD_TODO',
			text: todoText
    })
  }
}
