export function addTodo(todoText) {
  return function (dispatch) {
    return dispatch({
      type: 'ADD_TODO',
			text: todoText
    })
  }
}
