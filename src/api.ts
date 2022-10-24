import axios from 'axios';
import { baseURL, token } from './consts';

const api = axios.create({
  baseURL: `${baseURL}`,
  timeout: 30000,
  withCredentials: false,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Cross-Domain': true,
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
