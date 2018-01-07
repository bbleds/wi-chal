import initialState from '../store/initialState'

export default function todoReducer(state = initialState.todos, action) {

  switch (action.type) {

    case 'ADD_TODO_SUCCESS':
      return [
				...state,
				{
					text: action.text,
					todoId: action.todoId,
					completed: false
				}
			]

		case 'TOGGLE_TODO_SUCCESS':
			return state.map( item => {
				if (item.todoId == action.todoId) item.completed = !item.completed
				return item
			})

    default:
      return state
  }
}
