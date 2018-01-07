import React, {Component} from 'react'

export default class TodoForm extends Component{

	submit(){
		const val = this.todoInput.value.trim()

		val.length ?
			(this.props.submitHandler(val), this.todoInput.value = '') :
			this.props.errorHandler('Oops! You cannot create an empty to-do. Please try again.')
	}

	render() {
		const {submitHandler, errorHandler} = this.props

		return(
			<div id="todo-input-form" className="input-group">
				<input
					className="form-control"
					type='text'
					placeholder="Enter a todo..."
					ref={ node => this.todoInput = node }
					onKeyUp={ e => e.key.toLowerCase() === 'enter' && this.submit() }
					aria-describedby="todo-input-addon"
				/>
				<span
					className="input-group-addon"
					id="todo-input-addon"
					onClick={ () => this.submit() }
				> Add </span>
			</div>
		)
	}
}
