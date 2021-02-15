import { handleActions } from 'redux-actions'
import { filterCategories } from '../../utils/filter-categories'
import actions from '../actions/categories'

function selectCategory(map, action) {
  const newMap = { ...map }
  const category = action.payload
  const arr = Object.keys(newMap)
  // === NOTE: Do not delete the code below, use this for multiple category selection
  // copy the array that consists only of the selected key
  // const currentStatuses = arr.map(key => newMap[key].isSelected)
  // if (currentStatuses.includes(false)) {
  //   // the rest
  //   newMap[category].isSelected = !newMap[category].isSelected
  // } else {
  //===
  // select it for the first time
  const arrCheck = Object.keys(newMap).map(key => newMap[key].isSelected)
  arr.forEach(cat => {
    if (cat !== category)
      newMap[cat].isSelected =
        arrCheck.includes(false) && newMap[category].isSelected === true
          ? true
          : false
  })

  newMap[category].isSelected = true

  // }
  return newMap
}

function resetFilter(map) {
  const newMap = { ...map }
  const arr = Object.keys(newMap)
  arr.forEach(category => {
    newMap[category].isSelected = true
  })
  return newMap
}

// TODO: add more functions below

export default handleActions(
  {
    [actions.selectCategory]: selectCategory,
    [actions.resetFilter]: resetFilter,
  },
  filterCategories // init state
)
