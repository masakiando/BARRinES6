/*eslint-disable import/default */
import 'babel-polyfill'; //babelの変換において、古いブラウザでもある程度動かす
import React from 'react';
import { render } from 'react-dom';
// configureStoreはdispatchでアクションを実行してステートを更新する
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadGames} from './actions/gameActions';
import {loadMenus} from './actions/starbucksAcions';
import {loadPlayers} from './actions/playerAcions';
import {loadTrips} from './actions/tripActions';


import setAuthenticationToken from './utils/setAuthenticationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authActions';

import './styles/styles.css'; //WebpackもCSSファイルをインポートできます！
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
// import '../node_modules/design-system-react';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadGames());
store.dispatch(loadMenus());
store.dispatch(loadPlayers());
store.dispatch(loadTrips());

if (localStorage.jwtToken) { //リロード時localStorageにjwtTokenあれば
  setAuthenticationToken(
    localStorage.jwtToken);
  store.dispatch(  //jwtTokenをdecodeしそのユーザーデータをstoreに保管する
    setCurrentUser(
      jwt.decode(localStorage.jwtToken)));
}

render(
    <Provider store={store}>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </Provider>,
  document.getElementById('app')
);
/* browserHistory
閲覧した URL を記録してログに残すユーザデーモン */
