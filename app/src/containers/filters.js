import { connect } from 'react-redux'
import { resetFilter, selectCategory } from '../state/actions/categories'
import Filters from '../components/filters'

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

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
