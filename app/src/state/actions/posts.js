import { createAction } from 'redux-actions'

export const setPostsIds = createAction('SET_POSTS_SLUG')
export const filterPosts = createAction('FILTER_POSTS')

export default { setPostsIds, filterPosts }
