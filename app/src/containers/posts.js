import { connect } from 'react-redux'
import { setPostsIds } from '../state/actions/posts'
import Posts from '../components/posts'

function mapDispatchToProps(dispatch) {
  return {
    setPostsIds: posts => {
      dispatch(setPostsIds(posts))
    },
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
