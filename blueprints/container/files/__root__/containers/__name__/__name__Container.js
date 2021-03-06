import {connect} from 'react-redux'
// For Lifecycle composing
// import {compose, lifecycle} from 'recompose'
import <%= pascalEntityName %> from '../../components/<%= camelEntityName %>/<%= camelEntityName %>Component'
import {actionCreators} from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    starCount: state.counter.count
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping = {
  onClick: actionCreators.increment
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default connect(mapStateToProps, propsMapping)(<%= pascalEntityName %>)

// export default compose(
//   connect(mapStateToProps, propsMapping),
//   lifecycle({
//     componentDidMount: function() {
//       if (this.props.fetchBasic) {
//         this.props.fetchBasic()
//       }
//     }
//   })
// )(<%= pascalEntityName %>)
