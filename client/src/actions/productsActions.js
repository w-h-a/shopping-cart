export const productUpdated = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: { product }
  }
};

export const setProducts = (products) => {
  return { type: "SET_PRODUCTS", payload: { products } }
};

export const createProduct = (product) => {
  return {
    type: "CREATE_PRODUCT",
    payload: { product }
  }
};

export const deleteProductAction = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: { productId }
  }
};