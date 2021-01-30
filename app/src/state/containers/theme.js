import { connect } from 'react-redux'
import { setIsDark } from '../actions/theme'
import TogglerContainer from '../../components/toggler-container'

function mapDispatchToProps(dispatch) {
  return {
    setIsDark: themeBool => {
      dispatch(setIsDark(themeBool))
    },
  }
}

export default connect(null, mapDispatchToProps)(TogglerContainer)
