// representation of initial application state
const initialState = {
	todos: [],
	todosVisibility: 'all',
	errors: { hasError : false, msg: '' },
	formFieldValues: { TodoForm : { addTodoInput : '' } }
}

export default initialState
