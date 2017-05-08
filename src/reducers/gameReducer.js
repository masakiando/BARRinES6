import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(
  state = initialState.games, action) {
  debugger;
  switch (action.type) {

    case types.LOAD_GAMES_SUCCESS:
      return action.games;

    case types.LOAD_GAME_SUCCESS:
      debugger;
      const index = state.findIndex(item => item._id === action.game._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.game._id) return action.game;
          return item;
        });
      } else {
        return [
          ...state,
          action.game
        ];
      }

    case types.CREATE_GAME_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.game)
      ];

    default: return state;
  }
}
