import {connect} from 'react-redux'
// For Lifecycle composing
// import {compose, lifecycle} from 'recompose'
import HeroPicker from '../../components/heroPicker/heroPickerComponent'
import {actionCreators} from '../../redux/reducers/server/serverActions'

// Global State
export function mapStateToProps (state, props) {
  return {
    team: state.ui.team,
    hasBeenPicked: state.picker.disabledHeroes.includes(props.name)
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  pick: actionCreators.pick
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(HeroPicker)

// export default compose(
//   connect(mapStateToProps, propsMapping),
//   lifecycle({
//     componentDidMount: function() {
//       if (this.props.fetchBasic) {
//         this.props.fetchBasic()
//       }
//     }
//   })
// )(HeroPicker)
