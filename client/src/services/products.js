import axios from 'axios';

const API_URI = 'http://localhost:5000/api';

const getAllProducts = async () => {
  const response = await axios.get(`${API_URI}/products`);
  return response.data;
};

const addProduct = async (title, price, quantity) => {
  const response = await axios.post(`${API_URI}/products`, { title, price, quantity });
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URI}/products/${id}`);
  return response.data;
};

const updateProduct = async (id, title, price, quantity) => {
  const response = await axios.put(`${API_URI}/products/${id}`, { title, price, quantity });
  return response.data;
};

const productService = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};

export default productService;