import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthenticationToken from '../utils/setAuthenticationToken';
import * as types from './actionTypes';

export function setCurrentUser(user) {
  return {type: types.SET_CURRENT_USER, user};
}

export function login(data) {
  debugger;
  console.log(data);
  return dispatch => {
    return axios.post(
      '/api/authentication', data)
    .then(
      (res) => {                            //成功 処理 １
        const token = res.data.token;       //    処理 １-1-1
        console.log(token);
        localStorage.setItem('jwtToken', token);//処理 １-1-2localStorageに追加
        setAuthenticationToken(token);          //処理 １-1-3Request headersに追加
        console.log(jwt.decode(token)); //node net,dns jwt.signを元に戻す
        dispatch(setCurrentUser(jwt.decode(token)));
      }
    );
  };
}
