import axios from 'axios';
import * as types from './actionTypes';

export function loadMenusSuccess(menus) {
  return { type: types.LOAD_MENUS_SUCCESS, menus};
}

export function createMenuSuccess(menu) {
  return {type: types.CREATE_MENU_SUCCESS, menu};
}

export function updateMenuSuccess(menu) {
  return { type: types.UPDATE_MENU_SUCCESS, menu};
}

export function deleteMenuSuccess(menuId) {
  return {type: types.DELETE_MENU_SUCCESS, menuId};
}

export function loadMenus() {
  return dispatch => {
    return axios.get('/api/starbucks')
    .then(res => {
      const menus = res.data;
      dispatch(loadMenusSuccess(menus));
    });
  };
}
// POST or PUT
export function saveMenu(menu) {
  return dispatch => {
    if(!menu._id) { // POST
      debugger;
      return axios.post('/api/starbucks', menu)
      .then(res => {
        const menu = res.data;
        dispatch(createMenuSuccess(menu));
      });
    } else { // PUT
      debugger;
      return axios.put(`/api/starbucks/${menu._id}`, menu)
      .then(res => {
        const menu = res.data;
        dispatch(updateMenuSuccess(menu));
      });
    }
  };
}

export function deleteGame(menuId) {
  return (dispatch, getState) => {
    return axios.delete(`/api/starbucks/${menuId}`, menuId)
    .then(ok => {
      dispatch(deleteMenuSuccess(menuId));
    })
    .catch(error => {
      throw(error);
    });
  };
}
