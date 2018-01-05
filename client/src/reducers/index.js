import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import todosVisibilityReducer from './todosVisibilityReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
	todos : todoReducer,
	todosVisibility : todosVisibilityReducer,
	errors: errorReducer
});

export default rootReducer
