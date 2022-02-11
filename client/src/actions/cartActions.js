const postCartItemSuccess = cartItemAndMutatedProduct =>
  ({
    type: "POST_CART_ITEM_SUCCESS",
    payload: { cartItemAndMutatedProduct }
  });

const getAllCartItemsSuccess = cartItems =>
  ({
    type: "GET_ALL_CART_ITEMS_SUCCESS",
    payload: { cartItems }
  });

const postCheckoutSuccess = () =>
  ({
    type: "POST_CHECKOUT_SUCCESS",
  });

const cartActions = {
  postCartItemSuccess,
  getAllCartItemsSuccess,
  postCheckoutSuccess,
};

export default cartActions;
