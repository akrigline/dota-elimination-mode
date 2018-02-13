import {connect} from 'react-redux'
// For Lifecycle composing
// import {compose, lifecycle} from 'recompose'
import HeroGrid from '../../components/heroGrid/heroGridComponent'
// import {actionCreators} from '../../redux/reducers/server/serverActions'

// Global State
export function mapStateToProps (state, props) {
  return {
    firstPick: state.picker.firstPick,
    step: state.picker.step,
    team: state.ui.team
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

export default connect(mapStateToProps, propsMapping)(HeroGrid)

// export default compose(
//   connect(mapStateToProps, propsMapping),
//   lifecycle({
//     componentDidMount: function() {
//       if (this.props.fetchBasic) {
//         this.props.fetchBasic()
//       }
//     }
//   })
// )(HeroGrid)
