import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import flashMessages from './flashMessagesReducer';

//combineがtype: 'CREATE_COURSE'を確認して担当Reducerへ振り分ける
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  flashMessages
});

export default rootReducer;
