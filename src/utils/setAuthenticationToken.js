import axios from 'axios';

export default function setAuthenticationToken(token) {
  if (token) { //Request headersに追加
    axios.defaults.headers.common['Authentication'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authentication'];
  }
}
