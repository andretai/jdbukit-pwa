import { combineReducers } from 'redux';
import entryReducer from './entryReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import goalReducer from './goalReducer';

export default combineReducers({
  entry: entryReducer,
  error: errorReducer,
  auth: authReducer,
  goal: goalReducer
});