export default function todoReducer(state = [], action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [
				...state,
				{
					text: action.text,
					todoId: action.todoId,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state
    default:
      return state
  }
}
