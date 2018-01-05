import React from 'react'
import TodoItem from './TodoItem'
import uuid from 'uuid'

const TodoList = ({todos, onChangeHandler, todosVisibility}) => {
	let output = todos.map(
		(item) => {

			if(todosVisibility == 'completed' && item.completed == false){
				return false
			}

			if(todosVisibility == 'todo' && item.completed == true){
				return false
			}

			return (
				<TodoItem
					data={item}
					checkable={true}
					onChangeHandler={onChangeHandler}
					key={item.todoId}
				/>
		)}
	)

	output = output.length ? output : (<TodoItem  checkable={false} data={{text:'No todo items available'}}/>)

	return(
		<ul>
			{output}
		</ul>
	)
}

export default TodoList
