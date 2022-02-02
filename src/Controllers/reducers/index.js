import {
  GET_IMAGES, GET_MENU, GET_PODCASTS, GET_POSTS,
} from '../constants';

const initialState = {
  posts: [],
  page: {},
  menu: [],
  podcasts: [],
  images: [],
};

// eslint-disable-next-line default-param-last
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        menu: action.payload.items,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_PODCASTS:
      return {
        ...state,
        podcasts: action.payload,
      };
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
}
