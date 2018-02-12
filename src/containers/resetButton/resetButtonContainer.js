import {connect} from 'react-redux'
import {Button} from '../../styled'
import {actionCreators} from '../../redux/reducers/server/serverActions'

// Global State
export function mapStateToProps (state, props) {
  return {
  }
}

// If you want to use the function mapping
export const propsMapping = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(actionCreators.reset())
  }
}

export default connect(mapStateToProps, propsMapping)(Button)
