export default function errorReducer(state = { hasError : false, msg: '' }, action) {

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
