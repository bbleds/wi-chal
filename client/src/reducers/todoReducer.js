import * as handlers from '../services/todoHandler'

let initialState = handlers.getTodos()
console.log(initialState);

export default function todoReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
    default:
      return state
  }
}
