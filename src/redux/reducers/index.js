import {combineReducers} from 'redux'
import picker from './picker/pickerReducer'
import ui from './ui/uiReducer'
export default combineReducers({
  picker,
  ui
})
