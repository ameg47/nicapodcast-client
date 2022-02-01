import { GET_MENU } from '../constants';

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
    default:
      return state;
  }
}
