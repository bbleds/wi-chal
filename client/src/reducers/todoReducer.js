let initialState = {
	data : []
}

export default function todoReducer(state = initialState, action) {

  switch (action.type) {
    case 'SOME_TODO_ACTION':
      return state
    default:
      return state
  }
}
