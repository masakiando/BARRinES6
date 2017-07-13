import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import flashMessages from './flashMessagesReducer';
import authentication from './authenticationReducer';
import games from './gameReducer';
import menus from './starbucksReducer';
import players from './playerReducer';
import trips from './tripReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  flashMessages,
  authentication,
  games,
  menus,
  players,
  trips
});

export default rootReducer;
