import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import todosVisibilityReducer from './todosVisibilityReducer'
import errorReducer from './errorReducer'
import valuesReducer from './valuesReducer'

const rootReducer = combineReducers({
  todos : todoReducer,
  todosVisibility : todosVisibilityReducer,
  errors: errorReducer,
  formFieldValues: valuesReducer
})

export default rootReducer
