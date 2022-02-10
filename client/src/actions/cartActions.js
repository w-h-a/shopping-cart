const itemAdded = (cartItem) => {
  return {
    type: "ADD_CART_ITEM",
    payload: { cartItem }
  }
};

const setCart = (cartItems) => {
  return {
    type: "SET_CART",
    payload: { cartItems }
  }
};

const itemDeleted = () => {
  return {
    type: "DELETE_CART_ITEMS"
  }
};

const cartActions = {
  itemAdded,
  setCart,
  itemDeleted,
};

export default cartActions;
