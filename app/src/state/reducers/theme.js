import { handleActions } from 'redux-actions'
import actions from '../actions/theme'

function setIsDark(map, action) {
  const newMap = { ...map }
  const themeBool = action.payload
  newMap['isDark'] = themeBool
  return newMap
}
function getLocalStorageTheme() {
  const theme =
    typeof window !== 'undefined' && window.localStorage.getItem('theme')
  if (theme !== null) {
    return theme === 'light' ? false : true
  } else {
    return true // dark theme is always by default
  }
}

export default handleActions(
  {
    [actions.setIsDark]: setIsDark,
  },
  { isDark: getLocalStorageTheme() } // init state
)
