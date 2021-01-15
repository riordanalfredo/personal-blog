import { combineReducers } from 'redux'
import categories from './reducers/categories'
import posts from './reducers/posts'

//=== states architecture ===
// {
//   categories:{
//     astronomy:{
//       ... see utils/filter-categories
//     }
//   },
//   posts:{
//     // the array is list of post index
//     astronomy: [0,1,2],
//     business: [],
//     ...
//   }
// }

export default combineReducers({
  categories,
  posts,
})
