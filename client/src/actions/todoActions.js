export function someTodoAction(data) {

  return function (dispatch) {
    return dispatch({
      type: 'SOME_TODO_ACTION'
    })
  }
}
