import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/todoActions'

// include our components
import {render} from 'react-dom'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoFooter from './TodoFooter'

class TodoContainer extends Component{
	render(){
		let { todos, todosVisibility, state } = this.props

		return(
			<div id='todo-wrapper' className='container'>
				<div className="row">
					<div id='todo-app-output' className="col-md-offset-3 col-md-6">
						<h1>To-do App</h1>
						<TodoForm
							submitHandler={
								(value)=>{
									this.props.actions.addTodo(value)
								}
							}
						/>
						<p>Currently viewing - {todosVisibility} </p>
						<TodoList
							todos={todos}
							onChangeHandler={
								(todoId) => {
									this.props.actions.toggleTodo(todoId)
								}
							}
							todosVisibility={todosVisibility}
						/>
						<TodoFooter
							onClickHandler={(value)=>{
								this.props.actions.setTodosVisibilty(value)
							}}
						/>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
		todosVisibility: state.todosVisibility,
		state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)
