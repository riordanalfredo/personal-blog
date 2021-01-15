import { createAction } from 'redux-actions'

export const setPostsCategories = createAction('SET_POSTS_CATEGORIES')
export const filterPosts = createAction('FILTER_POSTS')

export default { setPostsCategories, filterPosts }
