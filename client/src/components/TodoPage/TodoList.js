import React from 'react'
import uuid from 'uuid'
import {compare} from 'alphanumeric-sort'
import TodoItem from './TodoItem'

const TodoList = ({todos, onChangeHandler, todosVisibility}) => {

	// sort by completed status and then alphanumerically
	let sortCompleteAndAlphanum = (a,b) => {
		if(a.completed && !b.completed) return 1
		if(b.completed && !a.completed) return -1
		return compare(a.text.toLowerCase(), b.text.toLowerCase())
	}

	// filter by a user-selected status of todos
	let filterBySelectedVisibility = (item) => {
		let completedStatusSort = null

		switch(todosVisibility) {
			case 'completed':
				completedStatusSort = true
				break
			case 'todo':
				completedStatusSort = false
				break
			default:
				break
		}

		if(completedStatusSort === item.completed || completedStatusSort === null){
			return true
		}
	}

	let cleanedTodos = todos.sort(sortCompleteAndAlphanum).filter(filterBySelectedVisibility)

	// build output
	let output = cleanedTodos.map(
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

	output = output.length ? output : (<TodoItem  checkable={false} data={{text:'No todo items available'}}/>)

	return(
		<ul>
			{output}
		</ul>
	)
}

export default TodoList
