import React from 'react'

const TodoItem = ({text, checkable}) => {
	return(
		<li>
			<label>
				{ checkable ? <input type="checkbox" /> : '' }
				<span>{text}</span>
			</label>
		</li>
	)
}

export default TodoItem
