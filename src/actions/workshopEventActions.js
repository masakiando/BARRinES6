import axios from 'axios';

export function saveWorkshopEvent(workshopEvent) {
  return function (dispatch, getState) {
    return axios.post(
      '/api/workshopevent', workshopEvent);
  };
}
