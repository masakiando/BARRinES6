/*eslint-disable import/default */
import 'babel-polyfill'; //babelの変換において、古いブラウザでもある程度動かす
import React from 'react';
import { render } from 'react-dom';
// configureStoreは
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import setAuthenticationToken from './utils/setAuthenticationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authActions';

import './styles/styles.css'; //WebpackもCSSファイルをインポートできます！
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

if (localStorage.jwtToken) {
  setAuthenticationToken(
    localStorage.jwtToken);
  store.dispatch(
    setCurrentUser(
      jwt.decode(localStorage.jwtToken)));
}

render(
    <Provider store={store}>
      <Router history={browserHistory}
            routes={routes} />
    </Provider>,
  document.getElementById('app')
);
/* browserHistory
閲覧した URL を記録してログに残すユーザデーモン */
