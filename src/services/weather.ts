import apiClient from './apiClient';

export const getWeather = async (q: string) => {
  return apiClient.get('/data/2.5/weather', {params: {q}});
};
