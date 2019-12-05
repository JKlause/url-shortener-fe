import { CREATE_URL, SET_URLS, SET_DETAIL_URL, SET_URL_ERROR, SET_URL_RELOAD } from '../actions/urlActions';

const initialState = {
  urls: [],
  detail: {},
  error: null,
  reload: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_URLS:
      return { ...state, urls: action.payload };
    case CREATE_URL:
      return { ...state, urls: [...state.urls, action.payload], error: null };
    case SET_DETAIL_URL:
      return { ...state, detail: action.payload };
    case SET_URL_ERROR:
      return { ...state, error: action.payload };
    case SET_URL_RELOAD:
      return { ...state, reload: !state.reload };
    default:
      return state;
  }
}
