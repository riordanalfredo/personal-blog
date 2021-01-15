import { connect } from 'react-redux'
import { setPostsCategories } from '../actions/posts'
import Posts from '../../components/posts'

function mapDispatchToProps(dispatch) {
  return {
    setPostsCategories: posts => {
      dispatch(setPostsCategories(posts))
    },
  }
}

function mapStateToProps({ posts, categories }) {
  return { posts, categories }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
