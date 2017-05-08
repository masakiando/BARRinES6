import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadGamesSuccess(games) {
  return { type: types.LOAD_GAMES_SUCCESS, games};
}
// one game load
export function loadGameSuccess(game) {
  debugger;
  return { type: types.LOAD_GAME_SUCCESS, game};
}

export function createGameSuccess(game) {
  return {type: types.CREATE_GAME_SUCCESS, game};
}

export function loadGames() {
  debugger;
  return function (dispatch) {
    fetch('/api/games')
      .then(res => res.json())
      .then(games => {
        dispatch(loadGamesSuccess(games));
    });
  };
}
// one game load
export function loadGame(id) {
  debugger;
  return function (dispatch) {
    fetch(`/api/games/${id}`)
      .then(res => res.json())
      .then(game => {
        dispatch(loadGameSuccess(game));
    });
  };
}

function handleResponse(response) {
  debugger;
  if (response.ok) {
    return response.json();
  } else {
    //errorにError statusTextとresponse入れる
    let error = new Error(response.statusText);
    error.response  = response;
    throw error;
  }
}

export function saveGame(game) {
  debugger;
  return function (dispatch, getState) {
    return fetch('/api/games', { // XMLHttpRequest
      method: 'post',
      body: JSON.stringify(game),
      headers: {'Content-Type': 'application/json'}
    }).then(handleResponse).then(game => {
      dispatch(createGameSuccess(game));
    });
  };
}
