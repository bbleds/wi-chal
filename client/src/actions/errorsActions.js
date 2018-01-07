import * as types from '../constants'

// general usage for creating error messages
export function generateError(msg) {
  return function (dispatch) {
    return dispatch({
      type: types.GENERATE_ERROR,
			payload: msg
    })
  }
}

// general usage for clearing existing errors
export function cleanErrors() {
  return function (dispatch) {
    return dispatch({
      type: types.CLEAN_ERRORS
    })
  }
}
