import { combineReducers } from 'redux'
import categories from './reducers/categories'
import posts from './reducers/posts'
// import appTheme from './reducers/appTheme'

//=== states architecture ===
// {
//   categories:{
//     astronomy:{
//       ... see utils/filter-categories
//     }
//   },
//   posts:{
//     // the array is list of post index
//     education: [0,1,2],
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
  // appTheme,
})
