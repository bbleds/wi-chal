import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import todosVisibilityReducer from './todosVisibilityReducer'

const rootReducer = combineReducers({
	todos : todoReducer,
	todosVisibility : todosVisibilityReducer
});

export default rootReducer
