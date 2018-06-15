import { combineReducers } from 'redux'

// Reducers
import filmReducer from './filmReducer'

// Combine Reducers
var reducers = combineReducers({
  filmState: filmReducer
})

export default reducers
