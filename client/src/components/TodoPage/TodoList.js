import React from 'react'
import TodoItem from './TodoItem'
import uuid from 'uuid'

const TodoList = ({todos}) => {
	let output = todos.map((item)=><TodoItem key={uuid()} text={item.text}/>)

	return(
		<ul>
			{output}
		</ul>
	)
}

export default TodoList
