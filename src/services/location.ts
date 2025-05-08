import apiClient from './apiClient';

export const searchLocation = async (q: string, controller: AbortController) => {
  return apiClient.get('/geo/1.0/direct', {params: {q}, signal: controller.signal});
};
