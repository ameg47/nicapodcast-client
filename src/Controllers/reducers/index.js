import { GET_MENU, GET_POSTS } from '../constants';

const initialState = {
  posts: [],
  page: {},
  menu: [],
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
    default:
      return state;
  }
}
