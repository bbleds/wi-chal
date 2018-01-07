import * as errorsActions from './errorsActions'
import * as todosActions from './todosActions'
import * as todosVisibilityActions from './todosVisibilityActions'
import * as valuesActions from './valuesActions'

export default {
  ...errorsActions,
  ...todosActions,
  ...todosVisibilityActions,
  ...valuesActions
}
