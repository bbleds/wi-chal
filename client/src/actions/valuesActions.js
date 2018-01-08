import {
  SET_ADD_TODO_INPUT,
  CLEAR_ADD_TODO_INPUTS
} from '../constants'

// used to set an input field value on state
export const setTodoFormInputValue = (val, field) => ({
  type: SET_ADD_TODO_INPUT,
  payload: { val, field }
})

// used to set an input field value on state
export const clearFormInputs = () => ({
  type: CLEAR_ADD_TODO_INPUTS
})
