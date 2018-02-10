import { connect } from 'react-redux'
import { compose } from 'recompose'
import DisplayStars from '../../components/displayStars/displayStarsComponent'
import { actionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    count: state.basicReducer.count
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  increment: actionCreators.increment,
  decrement: actionCreators.decrement
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default compose(
  connect(mapStateToProps, propsMapping)
  // lifecycle({
  //   componentDidMount: function () {
  //     this.props.fetchBasic && this.props.fetchBasic()
  //   }
  // })
)(DisplayStars)
