import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import flashMessages from './flashMessagesReducer';
import authentication from './authenticationReducer';
import games from './gameReducer';

//combineReducers ruduxはactionの発行を監視する
//combineがtype: 'CREATE_COURSE'を確認して担当Reducerへ振り分ける
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  flashMessages,
  authentication,
  games
});

export default rootReducer;
