import * as handlers from '../services/todoHandler'

export function addTodo(todoText) {
	// persist data
	handlers.addTodo({text: todoText, completed: false})

  return function (dispatch) {
    return dispatch({
      type: 'ADD_TODO',
			text: todoText
    })
  }
}
