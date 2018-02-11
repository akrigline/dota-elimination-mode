import {connect} from 'react-redux'
// For Lifecycle composing
import {compose, lifecycle} from 'recompose'
import HomePage from '../../routes/homePage/homePageRoute'
import {actionCreators} from '../../redux/reducers/server/serverActions'
import { subscribeToUpdate } from '../../services/api'

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
      if (this.props.updateServer) {
        subscribeToUpdate((err) => {
          if (err) {
            console.log(err)
          } else {
            this.props.updateServer(this.props.pickerState)
          }
        })
      }
    }
  })
)(HomePage)
