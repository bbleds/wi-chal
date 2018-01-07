import * as types from '../constants'

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
