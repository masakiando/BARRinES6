import * as types from './actionTypes';

export function loadTripsSuccess(trips) {
  return { type: types.LOAD_TRIPS_SUCCESS, trips };
}

export function createTripSuccess(trip) {
  debugger;
  return { type: types.CREATE_TRIP_SUCCESS,  trip };
}

export function updateTripSuccess(trip) {
  return { type: types.UPDATE_TRIP_SUCCESS, trip };
}

export function deleteTripSuccess(tripId) {
  return { type: types.DELETE_TRIP_SUCCESS, tripId };
}
export function loadTrips() {
  return function (dispatch) {
    fetch('/api/trips')
      .then(res => res.json())
      .then(trips => {
        dispatch(loadTripsSuccess(trips));
      }).catch(error => {
        throw(error);
      });
  };
}

export function saveTrip(trip) {
  return dispatch => {
    if(!trip._id) {
      return fetch(   //POST
        '/api/trips', //req url
        { // XMLHttpRequest
          method: 'post',
          body: JSON.stringify(trip),
          headers: { 'Content-Type': 'application/json'}
        }
      )
      .then(res => res.json())
      .then(trip => {
        dispatch(createTripSuccess(trip));
      });
    } else {// put
      return fetch(
        `/api/trips/${trip._id}`,
        { // XMLHttpRequest
          method: 'put',
          body: JSON.stringify(trip),
          headers: {'Content-Type': 'application/json'}
        }
      )
      .then(res => res.json())
      .then(trip => {
        dispatch(updateTripSuccess(trip));
      });
    }
  };
} //POST or PUT end

export function deleteTrip(tripId) {
  debugger;
  return (dispatch, getState) => {
    return fetch(`/api/trips/${tripId}`, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(() => {
      dispatch(deleteTripSuccess(tripId));
    });
  };
}
