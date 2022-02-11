import cartService from "../services/cart";

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

const createCartItem = product =>
  async dispatch => {
    const strangeChimera = await cartService.postCartItem(product);
    dispatch(postCartItemSuccess(strangeChimera));
  };

const readAllCartItems = () =>
  async dispatch => {
    const cartItems = await cartService.getAllCartItems();
    dispatch(getAllCartItemsSuccess(cartItems));
  };

const createCheckout = () =>
  async dispatch => {
    await cartService.postCheckout();
    dispatch(postCheckoutSuccess());
  };

const cartActions = {
  postCartItemSuccess,
  getAllCartItemsSuccess,
  postCheckoutSuccess,
  createCartItem,
  readAllCartItems,
  createCheckout,
};

export default cartActions;
