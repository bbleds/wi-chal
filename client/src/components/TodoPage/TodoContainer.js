import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../../actions'

// include custom components
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TodoFooter from './TodoFooter'

class TodoContainer extends Component{
  constructor(props){
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(val){
    this.props.actions.cleanErrors()
    this.props.actions.clearFormInputs()
    this.props.actions.addTodo(val)
  }

  render(){
    const { todos, todosVisibility, errors, formValues } = this.props

    return(
      <div>
        {
          errors.hasError &&
          <div className='error-message'>
            <span>{ errors.msg }</span>
            <span className="clear-error" onClick={ () => this.props.actions.cleanErrors() }>close</span>
          </div>
        }
        <div id='todo-wrapper' className='container'>
          <div className="row">
            <div id='todo-app-output' className="col-md-offset-3 col-md-6">
              <h1>To-do App</h1>
              <TodoForm
                submitHandler={ this.handleFormSubmit }
                errorHandler={ this.props.actions.generateError }
                onChangeHandler={ this.props.actions.setTodoFormInputValue }
                formValues={formValues}
              />
              <p>Currently viewing - {todosVisibility} </p>
              <TodoList
                todos={todos}
                onChangeHandler={ this.props.actions.toggleTodo }
                todosVisibility={ todosVisibility }
              />
              <TodoFooter
                setTodosVisibilty={ this.props.actions.setTodosVisibilty }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// allows us to specify what is passed in as props from redux application state to this react component
function mapStateToProps(state) {
  return {
    todos: state.todos,
    todosVisibility: state.todosVisibility,
    errors: state.errors,
    formValues: state.formFieldValues.TodoForm
  }
}

// this allows us to create custom actions and inject additional functionality before dispatching final redux actions
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// this connects redux application state with this react component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)
