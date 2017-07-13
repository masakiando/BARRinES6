import * as types from '../actions/actionTypes';
import initialState from './initialState';

const tripReducer = (state = initialState.trips, action) => {
  switch (action.type) {

    case types.LOAD_TRIPS_SUCCESS:
      return action.trips;

    case types.CREATE_TRIP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.trip)
      ];


    case types.UPDATE_TRIP_SUCCESS:
      return state.map(a => {
        if(a._id === action.trip._id) return action.trip;
        return a;
      });

    case types.DELETE_TRIP_SUCCESS:
      return [
        ...state.filter(a => a._id !== action.tripId)
      ];

      default: return state;
  }
};

export default tripReducer;
