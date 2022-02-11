import axios from "axios";

const baseProductURL = "http://localhost:5000/api/products";

const getAllProducts = async () => {
  const response = await axios.get(baseProductURL);
  return response.data;
}

const postProduct = async product => {
  const response = await axios.post(baseProductURL, product);
  return response.data;
}

const putProduct = async product => {
  const response = await axios.put(`${baseProductURL}/${product.id}`, product);
  return response.data;
}

const deleteProduct = async productId => {
  const response = await axios.delete(`${baseProductURL}/${productId}`);
  return response.data;
};

const productService = {
  getAllProducts,
  postProduct,
  putProduct,
  deleteProduct,
};

export default productService;
