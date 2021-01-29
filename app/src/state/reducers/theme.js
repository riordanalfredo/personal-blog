import { handleActions } from 'redux-actions'
import actions from '../actions/theme'

function setIsDark(map, action) {
  const newMap = { ...map }
  const themeBool = action.payload
  newMap['isDark'] = themeBool
  return newMap
}
function getLocalStorageTheme() {
  const theme = localStorage.getItem('theme')
  console.log(theme)
  if (theme !== null) {
    console.log(theme === 'dark' ? true : false)
    return theme === 'dark' ? true : false
  } else {
    return false
  }
}

export default handleActions(
  {
    [actions.setIsDark]: setIsDark,
  },
  { isDark: getLocalStorageTheme() } // init state
)
