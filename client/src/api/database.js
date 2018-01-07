import uuid from 'uuid'
import initialState from '../store/initialState'

const applicationStateKey = 'todo-app-state'

// ** Local Functions **

// this will serialize data and persist to localStorage
const saveStorage = data =>  {
  try { window.localStorage.setItem(applicationStateKey, JSON.stringify(data)) }
  catch(err) { return false }
  return true
}

// utility function for common return types
const returnData = (data, msg, errors = false) => {
  return {
    data,
    msg,
    errors
  }
}

// ** Export Methods **

// handles retrieving application state from data storage
export const getStorage = () => {
  return JSON.parse(window.localStorage.getItem(applicationStateKey)) || initialState
}

// handles persiting a todo into data storage
export const addTodo = todo => {

  const state = getStorage()
  const newTodo = {...todo, todoId: uuid() }
  const newState = {...state, todos: [ ...state.todos, newTodo ] }

  return saveStorage(newState) ?
    returnData(newTodo, 'added todo successfully') :
    returnData(newTodo, 'an error occurred', true)
}

// handles toggling a todo's "completed" property and updating data storage
export let toggleTodo = todoId => {

  const state = getStorage()
  const newState = { ...state,
    todos : state.todos.map(x => {
      if (x.todoId == todoId) x.completed = !x.completed
      return x
    })
  }

  return saveStorage(newState) ?
    returnData(todoId, 'toggled todo successfully') :
    returnData(todoId, 'an error occurred', true)
}

// handles setting the todos visibility by a user-selected filter
export let setTodosVisibilty = val => {

  const state = getStorage()
  const newState = {...state, todosVisibility: val}

  return saveStorage(newState) ?
    returnData(val, 'set visibility successfully') :
    returnData(val, 'an error occurred', true)
}
