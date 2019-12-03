import { postUrl, getUrlById, getUserUrls, deleteUrlById } from '../services/url';

export const CREATE_URL = 'CREATE_URL';
export const createUrl = url => dispatch => {
  postUrl(url)
    .then(url => {
      dispatch({
        type: CREATE_URL,
        payload: url
      });
    });
};

export const SET_URLS = 'SET_URLS';
export const fetchUserUrls = () => dispatch => {
  getUserUrls()
    .then(urls => {
      dispatch({
        type: SET_URLS,
        payload: urls
      });
    });
};

export const SET_DETAIL_URL = 'SET_DETAIL_URL';
export const fetchDetailUrl = id => dispatch => {
  getUrlById(id)
    .then(url => {
      dispatch({
        type: SET_DETAIL_URL,
        payload: url
      });
    });
};

export const deleteUrl = id => {
  deleteUrlById(id)
    .then(() => {
      fetchUserUrls();
    });
};
