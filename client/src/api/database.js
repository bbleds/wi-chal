import initialState from '../store/initialState'

const applicationStateKey = 'todo-app-state'

// retrive entire application state
export let getState = () => {
	let existingState = JSON.parse(window.localStorage.getItem(applicationStateKey))
	return existingState || initialState
}

// handles persiting a todo
export let addTodo = (todo) => {
	let state = getState()
	let todos = state.todos.concat(todo)
	let newState = {
		...state,
		todos
	}

	window.localStorage.setItem(applicationStateKey, JSON.stringify(newState))
}
