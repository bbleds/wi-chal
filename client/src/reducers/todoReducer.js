import initialState from '../store/initialState'
import {
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS
} from '../constants'

export default function todoReducer(state = initialState.todos, action) {

  switch (action.type) {

    case ADD_TODO_SUCCESS:
      const { text, todoId } = action.payload

      return [
        ...state,
        {
          text,
          todoId,
          completed: false
        }
      ]

    case TOGGLE_TODO_SUCCESS:
      return state.map( item =>
        item.todoId === action.payload ?
          {...item, completed: !item.completed} :
          item
      )

    default:
      return state
  }
}
