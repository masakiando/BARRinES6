import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function menuReducer(
  state = initialState.menus, action) {

  switch (action.type) {

    case types.CREATE_MENU_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.menu)
      ];

    case types.LOAD_MENUS_SUCCESS:
      return action.menus;

    case types.UPDATE_MENU_SUCCESS:
      return state.map(a => {
        if(a._id === action.menu._id) return action.menu;
        return a;
      });

    case types.DELETE_MENU_SUCCESS:
      return [
        ...state.filter(a => a._id !== action.menuId)
      ];

    default: return state;
  }
}
