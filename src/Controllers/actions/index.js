import axios from 'axios';
import { BASIC_URL, GET_MENU } from '../constants';

export function getMenu() {
  return function menu(dispatch) {
    axios.get('http://nicapodcasts.local/wp-json/wp-api-menus/v2/menus/4')
      .then((r) => { dispatch({ type: GET_MENU, payload: r.data }); })
      .catch((r) => r.response.data);
  };
}

export function getPosts() {
  return axios.get(`${BASIC_URL}/posts`)
    .then((r) => r.data)
    .catch((r) => r.response.data);
}
