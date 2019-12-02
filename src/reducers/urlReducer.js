import { CREATE_URL, SET_URLS, SET_DETAIL_URL } from '../actions/urlActions';

const initialState = {
  urls: [],
  detail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_URLS:
      return { ...state, urls: action.payload };
    case CREATE_URL:
      return { ...state, urls: [...state.urls, action.payload] };
    case SET_DETAIL_URL:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
}
