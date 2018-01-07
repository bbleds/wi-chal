import initialState from '../store/initialState'
import { SET_TODOS_VISIBILITY_SUCCESS } from '../constants'

export default function todosVisibilityReducer(state = initialState.todosVisibility, action) {

  switch (action.type) {

		case SET_TODOS_VISIBILITY_SUCCESS:
			return action.payload

    default:
      return state
  }
}
