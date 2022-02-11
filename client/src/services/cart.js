import axios from "axios";

const baseCartURL = "http://localhost:5000/api/";

const postCartItem = async productId => {
  const response = await axios.post(`${baseCartURL}/add-to-cart`, { productId });
  return response.data;
};

const getAllCartItems = async () => {
  const response = await axios.get(`${baseCartURL}/cart`);
  return response.data;
};

const postCheckout = async () => {
  await axios.post(`${baseCartURL}/checkout`);
};

const cartService = {
  postCartItem,
  getAllCartItems,
  postCheckout,
};

export default cartService;
