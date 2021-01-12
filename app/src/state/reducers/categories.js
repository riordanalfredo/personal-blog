import { handleActions } from 'redux-actions'
import actions from '../actions/categories'
import { filterCategories } from '../../utils/filter-categories'

function selectCategory(map, action) {
  const category = action.payload
}

// TODO: add more functions below

export default handleActions(
  {
    [actions.selectCategory]: selectCategory,
  },
  filterCategories
)
