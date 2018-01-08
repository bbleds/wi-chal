import {
  GENERATE_ERROR,
  CLEAN_ERRORS
} from '../constants'

// general usage for creating error messages
export const  generateError = msg => ({
  type: GENERATE_ERROR,
  payload: msg
})

// general usage for clearing existing errors
export const cleanErrors = () => ({ type: CLEAN_ERRORS })
