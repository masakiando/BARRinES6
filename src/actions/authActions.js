import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthenticationToken from '../utils/setAuthenticationToken';
import * as types from './actionTypes';

export function setCurrentUser(user) {
  debugger;
  return {type: types.SET_CURRENT_USER, user};
}

export function login(data) {
  debugger;
  console.log(data);
  return dispatch => {
    return axios.post('/api/acth', data)
    .then(
      (res) => {                           //成功 処理 １
        const token = res.data.token;       //    処理 １-1-1
        console.log(token);
        const user_login_event = res.data.user_login_event;
        console.log(user_login_event);
        localStorage.setItem('jwtToken', token);//処理 １-1-2localStorageに追加
        setAuthenticationToken(token);          //処理 １-1-3Request headersに追加
        console.log(jwt.decode(token)); //node net,dns jwt.signしたtokenをdecodeで元に戻す
        dispatch(setCurrentUser(jwt.decode(token))); // dispatch jwt.signしたtokenをdecodeで元にもどしてstoreのstateとする。
      }
    );
  };
}

export function logout() {
  debugger;
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthenticationToken(false);//login時、Request headersに追加したtokenを削除する
    dispatch(setCurrentUser({}));// storeのuser stateを空にする
  };
}
