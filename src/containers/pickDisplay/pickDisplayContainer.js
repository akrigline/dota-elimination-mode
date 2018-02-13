import {connect} from 'react-redux'
// For Lifecycle composing
// import {compose, lifecycle} from 'recompose'
import PickDisplay from '../../components/pickDisplay/pickDisplayComponent'
// import {actionCreators} from '../../redux/reducers/ui/uiReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    radiant: state.picker.radiant,
    dire: state.picker.dire,
    step: state.picker.step,
    team: state.picker.firstPick
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(PickDisplay)

// export default compose(
//   connect(mapStateToProps, propsMapping),
//   lifecycle({
//     componentDidMount: function() {
//       if (this.props.fetchBasic) {
//         this.props.fetchBasic()
//       }
//     }
//   })
// )(PickDisplay)
