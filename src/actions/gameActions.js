import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadGamesSuccess(games) {
  return { type: types.LOAD_GAMES_SUCCESS, games};
}

export function createGameSuccess(game) {
  debugger;
  return {type: types.CREATE_GAME_SUCCESS, game};
}

export function updateGameSuccess(game) {
  return {type: types.UPDATE_GAME_SUCCESS, game};
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
    if (!game._id) {
      return fetch('/api/games', { // XMLHttpRequest
        method: 'post',
        body: JSON.stringify(game),
        headers: {'Content-Type': 'application/json'}
      }).then(handleResponse).then(game => { //取り出した名をgameとする
        dispatch(createGameSuccess(game));
      });
    } else {
      return fetch(`/api/games/${game._id}`, { // XMLHttpRequest
        method: 'put',
        body: JSON.stringify(game),
        headers: {'Content-Type': 'application/json'}
      }).then(handleResponse).then(game => { //取り出した名をgameとする
        dispatch(updateGameSuccess(game));
      });
    }
  };
}
