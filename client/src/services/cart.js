import axios from 'axios';

const API_URI = 'http://localhost:5000/api';

const getCart = async () => {
  const response = await axios.get(`${API_URI}/cart`);
  return response.data;
};

const addToCart = async (productId) => {
  const response = await axios.post(`${API_URI}/add-to-cart`, { productId });
  return response.data;
};

const checkoutCart = async () => {
  await axios.post(`${API_URI}/checkout`);
}

const cartService = {
  getCart,
  addToCart,
  checkoutCart,
};

export default cartService;