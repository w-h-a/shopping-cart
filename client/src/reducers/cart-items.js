const initState = {
  items: [],
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case "POST_CART_ITEM_SUCCESS":
      const { item } = action.payload.cartItemAndMutatedProduct;
      return {
        ...state,
        items:
          state.items.some(ci => ci._id === item._id)
            ? state.items.map(ci => ci._id === item._id ? item : ci)
            : [ ...state.items, item ]
      };
    case "GET_ALL_CART_ITEMS_SUCCESS":
      return { ...state, items: action.payload.cartItems };
    case "POST_CHECKOUT_SUCCESS":
      return { ...state, items: [] };
    default:
      return state;
  };
};

export default cart;
