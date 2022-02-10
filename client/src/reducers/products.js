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
    default:
      return state;
  };
};

export default products;