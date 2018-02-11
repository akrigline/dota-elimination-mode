import {combineReducers} from 'redux'
import basicReducer from './basicReducer/basicReducerReducer'
import picker from './picker/pickerReducer'
export default combineReducers({
  basicReducer,
  picker
})
