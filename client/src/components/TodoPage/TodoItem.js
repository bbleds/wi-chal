import React from 'react'

const TodoItem = ({ data, checkable, onChangeHandler}) => {
	let handleChange = (todoId) => {
		console.log('sending handle change event from the todoitem')
		onChangeHandler(todoId)
	}
console.log(data);
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
