import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import SubscribedTimer from '../../components/subscribedTimer/subscribedTimerComponent'
import { actionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    time: state.basicReducer.time
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  subscribe: actionCreators.subscribeToTimer
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default compose(
  connect(mapStateToProps, propsMapping),
  lifecycle({
    componentDidMount: function () {
      this.props.subscribe && this.props.subscribe(1000)
    }
  })
)(SubscribedTimer)
