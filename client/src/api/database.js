import uuid from 'uuid'
import initialState from '../store/initialState'

const applicationStateKey = 'todo-app-state'

// retrive entire application state from data storage
export let getStorage = () => {
	let existingState = JSON.parse(window.localStorage.getItem(applicationStateKey))
	return existingState || initialState
}

// handles persiting a todo into data storage
export let addTodo = (todo) => {
	// append new todoId
	todo.todoId = uuid()

	let state = getStorage()
	let todos = state.todos.concat(todo)
	let newState = {
		...state,
		todos
	}

	window.localStorage.setItem(applicationStateKey, JSON.stringify(newState))

	return todo
}

// toggles a todo's "completed" property and saves it into data storage
export let toggleTodo = (todoId) => {
	let todos = getStorage().todos

	todos = todos.map((item)=>{

		 if(item.todoId == todoId){
			 item.completed = !item.completed
		 }

		 return item
	})

	let state = getStorage()
	state.todos = todos
	let newState = {
		...state,
		todos
	}

	window.localStorage.setItem(applicationStateKey, JSON.stringify(newState))

	return todoId
}
