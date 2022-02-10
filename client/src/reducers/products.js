const products = (state = [], action) => {
  switch(action.type) {
    case "SET_PRODUCTS":
      return action.payload.products;
    case "UPDATE_PRODUCT":
      return state.map(product => {
          return action.payload.product.id === product.id 
                                           ? action.payload.product 
                                           : product
      });
    case "CREATE_PRODUCT":
      return state.concat(action.payload.product);
    case "DELETE_PRODUCT":
      return state.filter(product => product.id !== action.payload.productId)
    default:
      return state;
  };
};

export default products;