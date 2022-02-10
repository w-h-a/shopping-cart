export const productUpdated = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: { product }
  }
};

export const setProducts = (products) => {
  return { type: "SET_PRODUCTS", payload: { products } }
};
