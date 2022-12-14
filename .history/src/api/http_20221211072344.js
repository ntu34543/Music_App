import axios from 'axios';
import { log } from 'react-native-reanimated';

const API_ROOT = 'https://636df979b567eed48acecbb5.mockapi.io/';

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  error => handleError(error),
);

const handleError = error => {
  if (error.message === 'Network Error') {
    const netWorkError = {
      data: {
        message: 'netWorkErr',
      },
    };
    return Promise.reject(netWorkError);
  }
  if (error.response) {
    const {status} = error.response;
    if (status === 401) {
      // return handleRefreshToken();
    }
  }

  return Promise.reject(error.response || error.request || error.message);
};

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    log
    return axios.delete(url, config);
  },
};

export default http;
