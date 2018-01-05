import React from 'react'

const TodoItem = ({text}) => {
	return(
		<li>
			<input type="checkbox"/>
			<span>{text}</span>
		</li>
	)
}

export default TodoItem
