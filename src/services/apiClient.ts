import axios from 'axios';

const API_KEY = '43d65c9e1e82c7fc1e29d07bece50d2a';

const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: API_KEY,
    units: 'metric', // You can change to 'imperial' if needed
  },
});

export default apiClient;
