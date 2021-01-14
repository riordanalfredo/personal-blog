import { connect } from 'react-redux'
import { selectCategory } from '../state/actions/categories'
import Filters from '../components/filters'

function mapDispatchToProps(dispatch) {
  console.log(selectCategory)
  return {
    selectCategory: category => {
      dispatch(selectCategory(category))
    },
  }
}

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
