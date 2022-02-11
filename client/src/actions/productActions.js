const productUpdated = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: { product }
  }
};

const setProducts = (products) => {
  return { type: "SET_PRODUCTS", payload: { products } }
};

const productCreated = (product) => {
  return {
    type: "CREATE_PRODUCT",
    payload: { product }
  }
};

const productDeleted = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: { productId }
  }
};

const productActions = {
  productUpdated,
  setProducts,
  productCreated,
  productDeleted,
};

export default productActions;