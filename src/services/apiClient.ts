import axios, {AxiosError} from 'axios';

// const API_KEY = '43d65c9e1e82c7fc1e29d07bece50d2a';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  function (config) {
    console.log('API request--', config);
    return config;
  },
  function (error) {
    console.log('API request error--', error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    console.log('API response--', response);
    return response;
  },
  function (error: AxiosError) {
    console.log(
      'API response error--',
      error.config,
      error.request,
      error.message,
    );
    return Promise.reject(error);
  },
);

export default apiClient;
