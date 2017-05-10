import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(
  state = initialState.games, action) {

  switch (action.type) {

    case types.LOAD_GAMES_SUCCESS:
      return action.games;

    case types.CREATE_GAME_SUCCESS:
      return [
        ...state,
        action.game
      ];

    // update(1)更新日順
    // case types.UPDATE_GAME_SUCCESS:
    //   debugger;
    //   return [
    //     ...state.filter(game => game._id !== action.game._id),
    //     Object.assign({}, action.game)
    //   ];

    // update(2)新規登録順
    case types.UPDATE_GAME_SUCCESS:
      debugger;
      return state.map(a => {
        if(a._id === action.game._id) return action.game;
        return a;
    });

    case types.DELETE_GAME_SUCCESS:
      debugger;
      return [
        ...state.filter(a => a._id !== action.gameId)
      ];

    default: return state;
  }
}
