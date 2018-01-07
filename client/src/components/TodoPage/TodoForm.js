import React, {Component} from 'react'

export default class TodoForm extends Component{

  submit(){
    const val = this.props.formValues.addTodoInput.trim()

    val.length ?
      this.props.submitHandler(val) :
      this.props.errorHandler('Oops! You cannot create an empty to-do. Please try again.')
  }

  render() {
    const {submitHandler, errorHandler, onClickHandler, onChangeHandler, formValues } = this.props

    return(
      <div id="todo-input-form" className="input-group">
        <input
          className="form-control"
          type='text'
          placeholder="Enter a todo..."
          value={ formValues.addTodoInput }
          onKeyUp={ e => e.key.toLowerCase() === 'enter' && this.submit() }
          onChange={ (e) => onChangeHandler(e.target.value, 'addTodoInput') }
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
