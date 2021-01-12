import { connect } from 'react-redux'
import { selectCategory } from '../state/actions/categoryFilter'
import Filters from '../components/filters'

function mapDispatchToProps(dispatch) {
  return {
    selectCategory: category => {
      dispatch(selectCategory(category))
    },
  }
}

export default connect(null, mapDispatchToProps)(Filters)
