import { createLogic } from 'redux-logic'
import {
  GENERATE_ERROR,
  SET_TODOS_VISIBILITY,
  SET_TODOS_VISIBILITY_SUCCESS
} from '../constants'
import * as api from '../api/database'

const visibilityLogic = createLogic({
  type: SET_TODOS_VISIBILITY,
  process({ getState, action }, dispatch, done){

    const { payload } = action
    const { errors } = api.setTodosVisibilty(payload)

    !errors ?
      dispatch({
        type: SET_TODOS_VISIBILITY_SUCCESS,
        payload
      }) :
      dispatch({
        type: GENERATE_ERROR,
        payload: 'Oops! An error occurred when filtering your to-do items. Please try again.'
      })

    done()
  }
})

export default [
  visibilityLogic
]
