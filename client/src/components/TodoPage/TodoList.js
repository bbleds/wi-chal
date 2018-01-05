import React from 'react'
import TodoItem from './TodoItem'
import uuid from 'uuid'

const TodoList = ({todos, onChangeHandler}) => {
console.log('todos', todos);
	let output = todos.map(
		(item) => {
			return (
				<TodoItem
					data={item}
					checkable={true}
					onChangeHandler={onChangeHandler}
					key={item.todoId}
				/>
		)}
	)

	output = output.length ? output : (<TodoItem  checkable={false} text={'No todo items available'}/>)

	return(
		<ul>
			{output}
		</ul>
	)
}

export default TodoList
