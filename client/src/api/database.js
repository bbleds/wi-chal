import uuid from 'uuid'
import initialState from '../store/initialState'

const applicationStateKey = 'todo-app-state'

let saveStorage = data =>  window.localStorage.setItem(applicationStateKey, JSON.stringify(data))

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
	saveStorage(newState)

	return todo
}

// handles toggling a todo's "completed" property and saves it into data storage
export let toggleTodo = todoId => {
	let newState = getStorage()
	let todos = newState.todos

	todos = todos.map( item => {
		 if (item.todoId == todoId) item.completed = !item.completed
		 return item
	})

	newState.todos = todos
	saveStorage(newState)

	return todoId
}

// handles setting the todos visibility by a user-selected filter
export let setTodosVisibilty = value => {
	let newState = getStorage()
	newState.todosVisibility = value
	saveStorage(newState)

	return true
}
