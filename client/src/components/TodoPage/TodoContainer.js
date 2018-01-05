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

function mapStateToProps(state) {
  return {
    todos: state.todos
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
