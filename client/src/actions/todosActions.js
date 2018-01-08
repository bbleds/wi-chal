import {
  ADD_TODO,
  TOGGLE_TODO
} from '../constants'

// handles adding a new todo and persisting to storage
export const addTodo = todoText => ({
  type: ADD_TODO,
  payload: todoText
})

// handles toggling the completed property of a single todo item by id
export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId
})
