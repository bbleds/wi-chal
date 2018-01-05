import React from 'react'

const TodoForm = ({submitHandler}) => {
	let todoInput

	let submit = () => {
		submitHandler(todoInput.value)
		todoInput.value = ''
	}

	return(
		<div>
			<input
				type='text'
				placeholder="Enter a todo..."
				ref={ (node)=> todoInput = node }
				onKeyUp={(e)=>{ e.key.toLowerCase() === 'enter' ? ( submit() ) : false}}
			/>
			<button onClick={ () => submit() }>Add</button>
		</div>
	)
}

export default TodoForm
