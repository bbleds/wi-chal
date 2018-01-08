import initialState from '../store/initialState'
import {
  SET_ADD_TODO_INPUT,
  CLEAR_ADD_TODO_INPUTS 
} from '../constants'

export default function valuesReducer(state = initialState.formFieldValues, action) {

  switch (action.type) {
    case SET_ADD_TODO_INPUT:
      return {
        ...state,
        TodoForm : {
          [action.payload.field] : action.payload.val
        }
      }

    case CLEAR_ADD_TODO_INPUTS:
      return {
        ...state,
        TodoForm : {
          addTodoInput: ''
        }
      }

    default:
      return state
  }
}
