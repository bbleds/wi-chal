import React, {Component} from 'react'
import {render} from 'react-dom'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoFooter from './TodoFooter'

export default class TodoContainer extends Component{
	render(){
		return(
			<div>
				<h1>All Todo elements are contained within!</h1>
				<TodoForm/>
				<TodoList/>
				<TodoFooter/>
			</div>
		)
	}
}
