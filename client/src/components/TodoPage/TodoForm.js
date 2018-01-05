import React from 'react'

const TodoForm = ({submitHandler}) => {
	let todoInput

	let validateInput = (value) => {
		return !value.length ? false : true
	}

	let submit = () => {
		let value = todoInput.value.trim()

		if(!validateInput(value)){
			alert('Oops! You cannot create an empty to-do. Please try again.')
		}else{
			submitHandler(value)
			todoInput.value = ''
		}
	}

	return(
		<div id="todo-input-form" className="input-group">
			<input
				className="form-control"
				type='text'
				placeholder="Enter a todo..."
				ref={ (node)=> todoInput = node }
				onKeyUp={(e)=>{ e.key.toLowerCase() === 'enter' ? ( submit() ) : false}}
				aria-describedby="todo-input-addon"
			/>
		<span className="input-group-addon" id="todo-input-addon" onClick={ () => submit() }>Add</span>
		</div>
	)
}

export default TodoForm
