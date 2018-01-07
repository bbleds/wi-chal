import React, {Component} from 'react'
import uuid from 'uuid'
import {compare} from 'alphanumeric-sort'
import TodoItem from './TodoItem'

export default class TodoList extends Component{

	// custom compare function to sort by "completed" status and then alphanumerically
	sortCompleteAndAlphanum(a,b){
		if(a.completed && !b.completed) return 1
		if(b.completed && !a.completed) return -1
		return compare(a.text.toLowerCase(), b.text.toLowerCase())
	}

	// custom function to filter todos by user-selected "completed" status
	filterBySelectedVisibility(item){
		let completedStatusSort = null

		switch(this.props.todosVisibility) {
			case 'completed':
				completedStatusSort = true
				break
			case 'to-do':
				completedStatusSort = false
				break
			default:
				break
		}

		if(completedStatusSort === item.completed || completedStatusSort === null) return true
	}

	render(){

		const {todos, onChangeHandler, todosVisibility} = this.props

		// filter, sort, and build output
		let output = todos.filter(this.filterBySelectedVisibility.bind(this)).sort(this.sortCompleteAndAlphanum).map( item => {
				return (
					<TodoItem
						data={item}
						checkable={true}
						onChangeHandler={onChangeHandler}
						key={item.todoId}
					/>
			)}
		)

		// show default message if no todos are found
		output = output.length ?
			output :
			(<TodoItem
				checkable={false}
				data={{text:'No to-do items available'}}
			/>)

		return(
			<ul className='todo-list'>
				{output}
			</ul>
		)
	}
}
