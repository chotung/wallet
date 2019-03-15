import { combineReducers } from 'redux'
import balanceReducer from '../reducer/balanceReducer'


export default combineReducers({
  // Some state : someReducer I import
  balance : balanceReducer
})