export const addCartItem = (cartItem) => {
  return {
    type: "ADD_CART_ITEM",
    payload: { cartItem }
  }
};

export const setCart = (cartItems) => {
  return {
    type: "SET_CART",
    payload: { cartItems }
  }
};

export const deleteCartItems = () => {
  return {
    type: "DELETE_CART_ITEMS"
  }
};
