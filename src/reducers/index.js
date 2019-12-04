import { combineReducers } from 'redux';
import session from './sessionReducer';
import urls from './urlReducer';

export default combineReducers({
  session,
  urls
});
