import { post, get, del } from './request';

const URL_URL = 'http://localhost:7891/api/v1/url';

export const postUrl = url => post(`${URL_URL}`, url);
export const getUserUrls = () => get(`${URL_URL}`);
export const getUrlById = id => get(`${URL_URL}/${id}`);
export const deleteUrlById = id => del(`${URL_URL}/${id}`);
