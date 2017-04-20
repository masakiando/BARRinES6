import * as types from '../actions/actionTypes';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export default (state =  [], action = {} ) => {
  const index = findIndex(state, { id: action.id });

  switch (action.type) {
    case types.ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
           id: shortid.generate(),
           type: action.message.type,
           text: action.message.text
        }
      ];
      //Array.prototype.slice()
      case types.DELETE_FLASH_MESSAGE:
      debugger;
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: return state;
  }
};
