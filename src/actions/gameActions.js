import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadGamesSuccess(games) {
  return { type: types.LOAD_GAMES_SUCCESS, games};
}

export function createGameSuccess(game) {
  return {type: types.CREATE_GAME_SUCCESS, game};
}

export function updateGameSuccess(game) {
  return {type: types.UPDATE_GAME_SUCCESS, game};
}

export function deleteGameSuccess(gameId) {
  return {type: types.DELETE_GAME_SUCCESS, gameId};
}

export function serahGamesSuccess(games) {
  return {type: types.SERAH_GAMES_SUCCESS, games};
}

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    let error = new Error(res.statusText);
    error.res  = res;
    throw(error);
  }
}

export function loadGames() {
  return function (dispatch) { //redux store return
    fetch('/api/games') //react not return
      .then(res => res.json())
      .then(games => {
        dispatch(loadGamesSuccess(games));
    }).catch(error => {
      throw(error);
    });
  };
}

export function searchGames(identifier) {
  return function (dispatch, getState) { //redux store return
    return fetch(`/api/games/${identifier}`) //react Component return
      .then(handleResponse)
      .then(games => {
        dispatch(serahGamesSuccess(games));
    });
  };
}
//POST or PUT
export function saveGame(game) {
  return function (dispatch, getState) {
    if (!game._id) { //POST
      return fetch(
        '/api/games', //req url
        { // XMLHttpRequest
        method: 'post',
        body: JSON.stringify(game),
        headers: {'Content-Type': 'application/json'}
        }
      )
      .then(handleResponse)
      .then(game => {
        dispatch(createGameSuccess(game));
      });
    } else { //PUT
      return fetch(
        `/api/games/${game._id}`,
        { // XMLHttpRequest
          method: 'put',
          body: JSON.stringify(game),
          headers: {'Content-Type': 'application/json'}
        }
      )
      .then(handleResponse)
      .then(game => {
        dispatch(updateGameSuccess(game));
      });
    }
  };
}

export function deleteGame(gameId) {
  return function (dispatch, getState) {
    return fetch(`/api/games/${gameId}`, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(handleResponse)
    .then(game => {
      dispatch(deleteGameSuccess(gameId));
    });
  };
}
