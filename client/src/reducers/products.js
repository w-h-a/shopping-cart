const products = (state = [], action) => {
  switch(action.type) {
    case "SET_PRODUCTS":
      return action.payload.products;
    case "UPDATE_PRODUCT":
      return updateProduct(state, action.payload.product);
    case "CREATE_PRODUCT":
      return state.concat(action.payload.product);
    case "DELETE_PRODUCT":
      return state.filter(product => product.id !== action.payload.productId)
    default:
      return state;
  };
};

const updateProduct = (products, updatedProduct) => {
  return products.map(product => {
    if (updatedProduct.id === product.id) {
      return updatedProduct;
    } else {
      return product;
    }
  });
};

export default products;