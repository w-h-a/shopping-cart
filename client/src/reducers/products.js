const initState = {
  ps: [],
  isAddingProduct: false,
  editingProductIds: [],
};

const products = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_SUCCESS":
      return { ...state, ps: action.payload.products };
    case "TOGGLE_ADD_PRODUCT_FORM":
      return { ...state, isAddingProduct: !state.isAddingProduct };
    case "POST_PRODUCT_SUCCESS":
      return {
        ...state,
        isAddingProduct: false,
        ps: [ ...state.ps, action.payload.newProduct ]
      };
    case "SET_EDITING_PRODUCT_ID":
      return {
        ...state,
        editingProductIds: [ ...state.editingProductIds, action.payload.productId ]
      };
    case "REMOVE_EDITING_PRODUCT_ID":
      return {
        ...state,
        editingProductIds:
          state.editingProductIds
            .filter(id => id !== action.payload.productId)
      };
    case "PUT_PRODUCT_SUCCESS":
      const { updatedProduct } = action.payload;
      return {
        ...state,
        editingProductIds:
          state.editingProductIds
            .filter(id => id !== updatedProduct.id),
        ps:
          state.ps
            .map(product =>
              product.id === updatedProduct.id
                ? updatedProduct
                : product
            )
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        ps:
          state.ps
            .filter(product => product.id !== action.payload.productId)
      }
    case "POST_CART_ITEM_SUCCESS":
      const { product } = action.payload.cartItemAndMutatedProduct;
      return {
        ...state,
        ps:
          state.ps
            .map(p =>
              p.id === product._id
                ? { ...product, id: product._id }
                : p
            )
      };
    default:
      return state;
  };
};

export default products;
