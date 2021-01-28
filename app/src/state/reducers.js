import { combineReducers } from 'redux'
import categories from './reducers/categories'
import posts from './reducers/posts'
import theme from './reducers/theme'

//=== states architecture ===
// {
//   categories:{
//     astronomy:{
//       ... see utils/filter-categories
//     }
//   },
//   posts:{
//     // the array is list of post index
//     science: [0,1,2],
//     business: [],
//     ...
//   }
//   theme:{
//     isDark: false
//   }
// }

export default combineReducers({
  categories,
  posts,
  theme,
})
