import { createLogic } from 'redux-logic'
import * as api from '../api/database'
import * as types from '../constants'

const visibilityLogic = createLogic({
	type: types.SET_TODOS_VISIBILITY,
	process({ getState, action }, dispatch, done){

    const { payload } = action
    const { errors } = api.setTodosVisibilty(payload)

		!errors ?
			dispatch({
			  type: types.SET_TODOS_VISIBILITY_SUCCESS,
				todosVisibility: payload
			}) :
			dispatch({
				type: types.GENERATE_ERROR,
				payload: 'Oops! An error occurred when filtering your to-do items. Please try again.'
			})

		done()
	}
})

export default [
  visibilityLogic
]
