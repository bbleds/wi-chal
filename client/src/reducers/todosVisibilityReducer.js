import initialState from '../store/initialState'

export default function todosVisibilityReducer(state = initialState.todosVisibility, action) {

  switch (action.type) {

		case 'SET_TODO_VISIBILITY':
			return action.todosVisibility

    default:
      return state
  }
}
