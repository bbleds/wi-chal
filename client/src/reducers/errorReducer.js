import initialState from '../store/initialState'

export default function errorReducer(state = initialState.errors, action) {

  switch (action.type) {

    case 'GENERATE_ERROR_SUCCESS':
      return {
				hasError: true,
				msg: action.payload
			}

		case 'CLEAN_ERRORS_SUCCESS':
			return {
				hasError: false,
				msg: ''
			}

    default:
      return state
  }
}
