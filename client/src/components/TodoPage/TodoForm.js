import React from 'react'

const TodoForm = ({submitHandler}) => {
	let todoInput

	let submit = () => {
		submitHandler(todoInput.value)
		todoInput.value = ''
	}

	return(
		<form>
			<input
				type='text'
				placeholder="Enter a todo..."
				ref={ (node)=> todoInput = node }
				onKeyUp={(e)=>{ e.key.toLowerCase() === 'enter' ? (console.log('submit was called'), submit()) : false}}
			/>
		</form>
	)
}

export default TodoForm
