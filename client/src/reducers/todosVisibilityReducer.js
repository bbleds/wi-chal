export default function todosVisibilityReducer(state = 'all', action) {

  switch (action.type) {

		case 'SET_TODO_VISIBILITY':
			return action.todosVisibility

    default:
      return state
  }
}
