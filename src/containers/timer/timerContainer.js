import {connect} from 'react-redux'
// For Lifecycle composing
// import {compose, lifecycle} from 'recompose'
import Timer from '../../components/timer/timerComponent'
import {actionCreators} from '../../redux/reducers/server/serverActions'
import pickOrder from '../../assets/pickOrder'

// Global State
export function mapStateToProps (state, props) {
  return {
    team: state.ui.team,
    step: state.picker.step,
    firstPick: state.picker.firstPick,
    disabledHeroes: state.picker.disabledHeroes,
    pickType: pickOrder[state.picker.step].pickType
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  pick: actionCreators.pick,
  nextStep: actionCreators.nextStep
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(Timer)

// export default compose(
//   connect(mapStateToProps, propsMapping),
//   lifecycle({
//     componentDidMount: function() {
//       if (this.props.fetchBasic) {
//         this.props.fetchBasic()
//       }
//     }
//   })
// )(Timer)
