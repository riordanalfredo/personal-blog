import { handleActions } from 'redux-actions'
import actions from '../actions/posts'

function setPostsIds(map, action) {
  const newMap = { ...map }

  return newMap
}

// TODO: add more functions below

export default handleActions(
  {
    [actions.setPostsIds]: setPostsIds,
  },
  [] // init state
)
