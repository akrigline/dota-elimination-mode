import {connect} from 'react-redux'
// For Lifecycle composing
import {compose, lifecycle} from 'recompose'
import PickRoute from '../../routes/pick/pickRoute'
import {actionCreators} from '../../redux/reducers/server/serverActions'
import { subscribeToUpdate, joinRoom } from '../../services/api'

// Global State
export function mapStateToProps (state, props) {
  return {
    pickerState: state.picker
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  updateServer: actionCreators.update
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

// export default connect(mapStateToProps, propsMapping)(Update)

export default compose(
  connect(mapStateToProps, propsMapping),
  lifecycle({
    componentDidMount: function () {
      const roomToJoin = this.props.location.pathname.replace('/', '')
      joinRoom(roomToJoin)

      if (this.props.updateServer) {
        subscribeToUpdate((err) => {
          console.log('updateme')
          if (err) {
            console.log(err)
          } else {
            this.props.updateServer(this.props.pickerState)
          }
        })
      }
    }
  })
)(PickRoute)
