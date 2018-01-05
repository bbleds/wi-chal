import initialState from '../store/initialState'

export default function errorReducer(state = initialState.errors, action) {

  switch (action.type) {

    case 'GENERATE_ERROR':
      return {
				...state,
				hasError: true,
				msg: action.msg
			}

		case 'CLEAN_ERRORS':
			return {
				...state,
				hasError: false,
				msg: ''
			}

    default:
      return state
  }
}
