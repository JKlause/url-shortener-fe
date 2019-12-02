import { combineReducers } from 'redux';
import session from './sessionReducer';
import memes from './memeReducer';

export default combineReducers({
  session,
  memes
});
