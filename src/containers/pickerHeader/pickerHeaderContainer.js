import {connect} from 'react-redux'
import {actionCreators} from '../../redux/reducers/ui/uiReducer'
import PickerHeader from '../../components/pickerHeader/pickerHeaderComponent'

// Global State
export function mapStateToProps (state, props) {
  return {
    team: state.ui.team
  }
}

export const propsMapping = {
  setTeam: actionCreators.setTeam
}

export default connect(mapStateToProps, propsMapping)(PickerHeader)
