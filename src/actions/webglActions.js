import * as types from './actionTypes';

export function createGameSuccess(game) {
  return {type: types.CREATE_GAME_SUCCESS, game};
}

export function saveWebgl(webgl) {
  return function (dispatch, getState) {
  debugger;
    return fetch(
      '/api/webgles',
      {
        method: 'post',
        body: JSON.stringify(webgl),
        headers: {'Content-Type': 'application/json'}
      }
    ); // fetch end
  };
}
