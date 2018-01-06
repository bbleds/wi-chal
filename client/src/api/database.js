import uuid from 'uuid'
import initialState from '../store/initialState'

const applicationStateKey = 'todo-app-state'

// ** Local Functions **

// this will serialize data and persist to localStorage
const saveStorage = data =>  {
	try { window.localStorage.setItem(applicationStateKey, JSON.stringify(data)) }
	catch(err) { return false }
	return true
}

// utility function for common return types
const returnData = (data, msg, errors = false) => {
	return {
		data,
		msg,
		errors
	}
}

// ** Export Methods **

// handles retrieving application state from data storage
export const getStorage = () => {
	const existingState = JSON.parse(window.localStorage.getItem(applicationStateKey))
	return existingState || initialState
}

// handles persiting a todo into data storage
export const addTodo = todo => {
	
	const state = getStorage()
	const newTodo = {...todo, todoId: uuid()}
	const newState = {...state, todos: [ ...state.todos, newTodo ] }

	return saveStorage(newState) ?
		returnData(newTodo, 'added todo successfully') :
		returnData(newTodo, 'an error occurred', true)
}

// handles toggling a todo's "completed" property and updating data storage
export let toggleTodo = todoId => {
	let newState = getStorage()
	const todos = newState.todos

	newState.todos = todos.map( item => {
		 if (item.todoId == todoId) item.completed = !item.completed
		 return item
	})

	const success = saveStorage(newState)
	const data = success ? returnData(todoId, 'toggled todo successfully') : returnData(todoId, 'an error occurred', true)

	return data
}

// handles setting the todos visibility by a user-selected filter
export let setTodosVisibilty = value => {
	let newState = getStorage()
	newState.todosVisibility = value
	let success = saveStorage(newState)
	let data = success ? returnData(value, 'set visibility successfully') : returnData(value, 'an error occurred', true)

	return data
}
