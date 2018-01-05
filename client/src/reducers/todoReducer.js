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
			let newState = state.map((item) => {
				if(item.todoId == action.todoId){
					item.completed = !item.completed
				}

				return item
			})
			return newState

    default:
      return state
  }
}
