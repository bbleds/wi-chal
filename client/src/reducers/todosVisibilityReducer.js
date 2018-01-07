import initialState from '../store/initialState'

export default function todosVisibilityReducer(state = initialState.todosVisibility, action) {

  switch (action.type) {

		case 'SET_TODOS_VISIBILITY_SUCCESS':
			return action.todosVisibility

    default:
      return state
  }
}
