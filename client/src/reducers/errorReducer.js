import initialState from '../store/initialState'
import { GENERATE_ERROR, CLEAN_ERRORS } from '../constants'

export default function errorReducer(state = initialState.errors, action) {

  switch (action.type) {

    case GENERATE_ERROR:
      return {
        hasError: true,
        msg: action.payload
      }

    case CLEAN_ERRORS:
      return {
        hasError: false,
        msg: ''
      }

    default:
      return state
  }
}
