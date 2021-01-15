import { handleActions } from 'redux-actions'
import actions from '../actions/posts'
import { filterCategories } from '../../utils/filter-categories'

// Global variables
const categories = {}
const init = {}
Object.keys(filterCategories).forEach(e => {
  categories[e] = filterCategories[e].categories
  init[e] = []
})

/**
 *
 * @param {*} map
 * @param {*} action
 */
function setPostsCategories(map, action) {
  const newMap = { ...map }
  const posts = action.payload
  // Loop all posts
  posts.forEach((e, index) => {
    // O(N) -- each post
    const postTags = e.node.frontmatter.categories
    // O(1) -- only 4 categories
    Object.keys(categories).forEach(c => {
      const obj = {}
      categories[c].forEach((el, i) => {
        obj[el] = i // O(M)
      })
      const tagsAreIncludedInCategory = postTags.some(
        el => obj[el] !== undefined
      )
      // store the post index if any of post's tags are included in the category
      if (tagsAreIncludedInCategory) {
        newMap[c] = [...newMap[c], index]
      }
    })
  })
  console.log(newMap)

  return newMap
}

export default handleActions(
  {
    [actions.setPostsCategories]: setPostsCategories,
  },
  init // init state
)
