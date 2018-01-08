import { SET_TODOS_VISIBILITY } from '../constants'

// handles filtering the viewable todos by user-selected filter
export const setTodosVisibilty = val => ({
  type: SET_TODOS_VISIBILITY,
  payload: val
})
