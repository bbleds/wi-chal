import * as types from '../constants'

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
