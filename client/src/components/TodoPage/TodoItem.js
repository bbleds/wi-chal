import React from 'react'

const TodoItem = ({text, checkable}) => {
	return(
		<li>
			{ checkable ? <input type="checkbox" /> : '' }
			<span>{text}</span>
		</li>
	)
}

export default TodoItem
