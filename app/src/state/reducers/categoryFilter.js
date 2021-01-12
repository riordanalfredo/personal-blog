import { handleActions } from 'redux-actions'
import Map from 'immutable'
import actions from '../actions/categoryFilter'

function selectCategory(map, action) {
  const category = action.payload
}

// TODO: add more functions below

export default handleActions(
  {
    [actions.selectCategory]: selectCategory,
  },
  Map()
)
