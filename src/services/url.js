import { post, get } from './request';

const URL_URL = 'http://localhost:7891/api/v1/url';

export const postUrl = meme => post(`${URL_URL}`, meme);
export const getUserUrls = () => get(`${URL_URL}`);
export const getUrlById = id => get(`${URL_URL}/${id}`);
