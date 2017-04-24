import * as types from '../actions/actionTypes';
import initialState from './initialState';
import isEmpty from 'lodash/isEmpty';

export default function authenticationReducer(
  state = initialState.authentication, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
          isAuthenticated: !isEmpty(action.user),
          user: action.user
      };
    default: return state;
  }
}
