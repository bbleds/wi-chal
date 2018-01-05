import React from 'react'
import TodoItem from './TodoItem'
import uuid from 'uuid'

const TodoList = ({todos}) => {
	let output = todos.map((item)=><TodoItem key={uuid()} text={item.text} checkable={true} />)

	output = output.length ? output : (<TodoItem  checkable={false} text={'No todo items available'}/>)

	return(
		<ul>
			{output}
		</ul>
	)
}

export default TodoList
