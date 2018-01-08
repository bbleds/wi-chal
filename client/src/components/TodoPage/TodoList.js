import React, {Component} from 'react'
import uuid from 'uuid'
import {compare} from 'alphanumeric-sort'
import TodoItem from './TodoItem'

export default class TodoList extends Component{
  constructor(props){
    super(props)
    this.renderTodoItem = this.renderTodoItem.bind(this)
    this.filterBySelectedVisibility = this.filterBySelectedVisibility.bind(this)
    this.sortCompleteAndAlphanum = this.sortCompleteAndAlphanum.bind(this)
  }

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

    return completedStatusSort === item.completed || completedStatusSort === null
  }

  renderTodoItem(item){
    return (
      <TodoItem
        data={item}
        checkable={true}
        onChangeHandler={this.props.onChangeHandler}
        key={item.todoId}
      />
    )
  }

  render(){

    const {todos, onChangeHandler, todosVisibility} = this.props
    const filteredTodos = todos.filter(this.filterBySelectedVisibility)

    return  (
      <ul className='todo-list'>
        { filteredTodos.length ?
           [...filteredTodos].sort(this.sortCompleteAndAlphanum).map(this.renderTodoItem) :
          <TodoItem
            checkable={false}
            data={{text:'No to-do items available'}}
          />
         }
     </ul>
   ) 
  }
}
