import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playerReducer(
  state = initialState.players, action) {

  switch (action.type) {

    case types.CREATE_PLAYER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.player)
      ];

    case types.LOAD_PLAYERS_SUCCESS:
      return action.players;

    case types.UPDATE_PLAYER_SUCCESS:
      return state.map(a => {
        if(a._id === action.player._id) return action.player;
        return a;
      });


    case types.DELETE_PLAYER_SUCCESS:
      return [
        ...state.filter(a => a._id !== action.playerId)
      ];

    default: return state;

  }
}
