import axios from 'axios';

export function login(data) {
  debugger;
  console.log(data);
  return dispatch => {
    return axios.post('/api/authentication', data);
  };
}
