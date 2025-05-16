import apiClient from './apiClient';

export const getProducts = async () => {
  return apiClient.get('/products');
};
