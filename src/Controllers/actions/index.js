import axios from 'axios';
import {
  BASIC_URL, GET_MENU, GET_PODCASTS, GET_POSTS, GET_IMAGES,
} from '../constants';

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

export function getPodcasts() {
  return async function podcasts(dispatch) {
    await axios.get(`${BASIC_URL}/podcast?_embed`)
      .then((r) => { dispatch({ type: GET_PODCASTS, payload: r.data }); })
      .catch((r) => r.response.data);
  };
}

export function getImages() {
  return async function images(dispatch) {
    await axios.get(`${BASIC_URL}/media`)
      .then((r) => { dispatch({ type: GET_IMAGES, payload: r.data }); })
      .catch((r) => r.response.data);
  };
}
