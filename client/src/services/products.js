import axios from 'axios';

const API_URI = 'http://localhost:5000/api';

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URI}/products`);
  return response.data;
};

export const addProduct = async (title, price, quantity) => {
  const response = await axios.post(`${API_URI}/products`, { title, price, quantity });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URI}/products/${id}`);
  return response.data;
};

export const updateProduct = async (id, title, price, quantity) => {
  const response = await axios.put(`${API_URI}/products/${id}`, { title, price, quantity });
  return response.data;
};