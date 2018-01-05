import React from 'react'
import uuid from 'uuid'
import {compare} from 'alphanumeric-sort'
import TodoItem from './TodoItem'

const TodoList = ({todos, onChangeHandler, todosVisibility}) => {
	// sort todos by completed status and then alphanumerically
	let sortedTodos = todos.sort((a,b) => {
		if(a.completed && !b.completed) return 1
		if(b.completed && !a.completed) return -1
		return compare(a.text.toLowerCase(), b.text.toLowerCase())
	})

	// build output
	let output = sortedTodos.map(
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
