import productService from "../services/products";

const getAllProductsSuccess = products =>
  ({
    type: "GET_ALL_PRODUCTS_SUCCESS",
    payload: { products }
  });

const postProductSuccess = newProduct =>
  ({
    type: "POST_PRODUCT_SUCCESS",
    payload: { newProduct }
  });

const toggleAddProductForm = () =>
  ({
    type: "TOGGLE_ADD_PRODUCT_FORM"
  });

const putProductSuccess = updatedProduct =>
  ({
    type: "PUT_PRODUCT_SUCCESS",
    payload: { updatedProduct }
  });

const setEditingProductId = productId =>
  ({
    type: "SET_EDITING_PRODUCT_ID",
    payload: { productId }
  });

const removeEditingProductId = productId =>
  ({
    type: "REMOVE_EDITING_PRODUCT_ID",
    payload: { productId }
  });

const deleteProductSuccess = productId =>
  ({
    type: "DELETE_PRODUCT_SUCCESS",
    payload: { productId }
  });

// action creators
const readAllProducts = () =>
  async dispatch => {
    const products = await productService.getAllProducts();
    dispatch(getAllProductsSuccess(products));
  };

const createProduct = product =>
  async dispatch => {
    const newProduct = await productService.postProduct(product);
    dispatch(postProductSuccess(newProduct));
  };

const deleteProduct = productId =>
  async dispatch => {
    await productService.deleteProduct(productId);
    dispatch(deleteProductSuccess(productId));
  };

const updateProduct = product =>
  async dispatch => {
    const updatedProduct = await productService.putProduct(product);
    dispatch(putProductSuccess(updatedProduct));
  };

const productActions = {
  getAllProductsSuccess,
  postProductSuccess,
  toggleAddProductForm,
  putProductSuccess,
  setEditingProductId,
  removeEditingProductId,
  deleteProductSuccess,
  createProduct,
  readAllProducts,
  updateProduct,
  deleteProduct,
};

export default productActions;
