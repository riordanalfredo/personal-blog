import { handleActions } from 'redux-actions'
import actions from '../actions/categories'
import { filterCategories } from '../../utils/filter-categories'

function selectCategory(map, action) {
  const newMap = { ...map }
  const category = action.payload
  const arr = Object.keys(newMap)
  const currentStatuses = arr.map(key => newMap[key].isSelected)
  if (currentStatuses.includes(false)) {
    // the rest
    newMap[category].isSelected = !newMap[category].isSelected
  } else {
    // select it for the first time
    arr.forEach(cat => {
      if (cat !== category) newMap[cat].isSelected = false
    })
    newMap[category].isSelected = true
  }
  return newMap
}

function selectAll(map) {
  const newMap = { ...map }
  return newMap
}

// TODO: add more functions below

export default handleActions(
  {
    [actions.selectCategory]: selectCategory,
    [actions.selectAllCategories]: selectAll,
  },
  filterCategories // init state
)
