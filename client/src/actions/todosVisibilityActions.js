import * as types from '../constants'

// handles filtering the viewable todos by user-selected filter
export function setTodosVisibilty(val){
  return function (dispatch) {
  return dispatch({
    type: types.SET_TODOS_VISIBILITY,
    payload: val
  })
  }
}
