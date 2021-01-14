import { connect } from 'react-redux'
import { resetFilter, selectCategory } from '../state/actions/categories'
import Filters from '../components/filters'

function mapDispatchToProps(dispatch) {
  console.log(selectCategory)
  return {
    selectCategory: category => {
      dispatch(selectCategory(category))
    },
    resetFilter: category => {
      dispatch(resetFilter(category))
    },
  }
}

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
