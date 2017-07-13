import axios from 'axios';
import * as types from './actionTypes';

export function loadPlayersSuccess(players) {
  return { type: types.LOAD_PLAYERS_SUCCESS, players};
}

export function createPlayerSuccess(player) {
  return { type: types.CREATE_PLAYER_SUCCESS, player};
}

export function deletePlayerSuccess(playerId) {
  return { type: types.DELETE_PLAYER_SUCCESS, playerId};
}

export function updatePlayerSuccess(player) {
  return { type: types.UPDATE_PLAYER_SUCCESS, player};
}

export function loadPlayers() {
  return dispatch => {
    return axios.get('/api/players')
    .then(res => {
      const players = res.data;
      dispatch(loadPlayersSuccess(players));
    });
  };
}

// POST or PUT
export function savePlayer(player) {
  return dispatch => {
    if(!player._id) { // post
      return axios.post('/api/players', player)
      .then(res => {
        const player = res.data;
        dispatch(createPlayerSuccess(player));
      });
    } else { //put
      return axios.put(`/api/players/${player._id}`, player)
      .then(res => {
        const player = res.data;
        dispatch(updatePlayerSuccess(player));
      });
    }
  };
} //POST or PUT end

export function deletePlayer(playerId) {
  return (dispatch, getState)  => {
    return axios.delete(`/api/players/${playerId}`, playerId)
    .then(ok => {
      dispatch(deletePlayerSuccess(playerId));
    });
  };
}
