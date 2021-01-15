import { connect } from 'react-redux'
import { resetFilter, selectCategory } from '../actions/categories'
import Filters from '../../components/filters'

function mapDispatchToProps(dispatch) {
  return {
    selectCategory: category => {
      dispatch(selectCategory(category))
    },
    resetFilter: () => {
      dispatch(resetFilter())
    },
  }
}

function mapStateToProps({ categories, posts }) {
  return { categories, posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
