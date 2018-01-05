// handles persiting a todo
export let addTodo = (todo) => {
	let todos = getTodos().concat(todo)
	window.localStorage.setItem('todos',JSON.stringify(todos))
}

// retrieve todo items
export let getTodos = () => {
	let todos = window.localStorage.getItem('todos')
	return todos ? JSON.parse(todos) : []
}
