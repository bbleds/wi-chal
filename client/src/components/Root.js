import React, {Component} from 'react'
import {render} from 'react-dom'
import TodoContainer from './TodoPage/TodoContainer'

export default class Root extends Component{
	render(){
		return(
			<div>
				<TodoContainer/>
			</div>
		)
	}
}
