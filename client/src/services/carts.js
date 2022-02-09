import axios from 'axios';

const API_URI = 'http://localhost:5000/api';

export const getCart = async () => {
  const response = await axios.get(`${API_URI}/cart`);
  return response.data;
};

export const addToCart = async (productId) => {
  const response = await axios.post(`${API_URI}/add-to-cart`, { productId });
  return response.data;
};

export const checkoutCart = async () => {
  await axios.post(`${API_URI}/checkout`);
}
