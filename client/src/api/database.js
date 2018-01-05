import uuid from 'uuid'
import initialState from '../store/initialState'

const applicationStateKey = 'todo-app-state'

// ** Local Functions **

// this will serialize data and persist to localStorage
let saveStorage = data =>  {
	try { window.localStorage.setItem(applicationStateKey, JSON.stringify(data)) }
	catch(err) { return false }
	return true
}

// utility function for common return types
let returnData = (data, msg, errors = false) => {
	return {
		data,
		msg,
		errors
	}
}

// ** Export Methods **

// handles retrieving application state from data storage
export let getStorage = () => {
	let existingState = JSON.parse(window.localStorage.getItem(applicationStateKey))
	return existingState || initialState
}

// handles persiting a todo into data storage
export let addTodo = todo => {

	todo.todoId = uuid()

	let newState = getStorage()
	let todos = newState.todos.concat(todo)
	newState.todos = todos
	let success = saveStorage(newState)
	let data = success ? returnData(todo, 'added todo successfully') : returnData(todo, 'an error occurred', true)

	return data
}

// handles toggling a todo's "completed" property and updating data storage
export let toggleTodo = todoId => {
	let newState = getStorage()
	let todos = newState.todos

	newState.todos = todos.map( item => {
		 if (item.todoId == todoId) item.completed = !item.completed
		 return item
	})

	let success = saveStorage(newState)
	let data = success ? returnData(todoId, 'toggled todo successfully') : returnData(todoId, 'an error occurred', true)

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
