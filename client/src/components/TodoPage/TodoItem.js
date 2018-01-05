import React from 'react'

const TodoItem = ({ data, checkable, onChangeHandler}) => {
	let handleChange = (todoId) => {
		onChangeHandler(todoId)
	}

	return(
		<li>
			<label>
				{
					checkable ? <input type="checkbox" onChange={()=> handleChange(data.todoId) } defaultChecked={data.completed} /> : ''
				}
				<span>{data.text}</span>
			</label>
		</li>
	)
}

export default TodoItem
