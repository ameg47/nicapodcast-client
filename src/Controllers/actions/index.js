import axios from 'axios';
import { BASIC_URL, GET_MENU, GET_POSTS } from '../constants';

export function getMenu() {
  return async function menu(dispatch) {
    await axios.get('http://nicapodcasts.local/wp-json/wp-api-menus/v2/menus/4')
      .then((r) => { dispatch({ type: GET_MENU, payload: r.data }); })
      .catch((r) => r.response.data);
  };
}

export function getPosts() {
  return async function posts(dispatch) {
    await axios.get(`${BASIC_URL}/posts?_embed`)
      .then((r) => { dispatch({ type: GET_POSTS, payload: r.data }); })
      .catch((r) => r.response.data);
  };
}
