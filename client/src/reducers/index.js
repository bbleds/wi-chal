import { combineReducers } from 'redux'
import todos from './todoReducer'
import todosVisibility from './todosVisibilityReducer'
import errors from './errorReducer'
import formFieldValues from './valuesReducer'

export default combineReducers({
  todos,
  todosVisibility,
  errors,
  formFieldValues
})
