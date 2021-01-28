import { handleActions } from 'redux-actions'
import actions from '../actions/theme'

function setIsDark(map, action) {
  const newMap = { ...map }
  const themeBool = action.payload
  newMap['isDark'] = themeBool
  return newMap
}

export default handleActions(
  {
    [actions.setIsDark]: setIsDark,
  },
  { isDark: false } // init state
)
