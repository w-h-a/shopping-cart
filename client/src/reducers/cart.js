const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return addItem(state, action.payload.cartItem);
    case "SET_CART":
      return action.payload.cartItems;
    case "DELETE_CART_ITEMS":
      return [];
    default:
      return state;
  };
};

const addItem = (cart, newItem) => {
  let exists = false;
  const newCart = cart.map(item => {
    if (item.productId === newItem.productId) {
      exists = true;
      return newItem
    } else {
      return item;
    }
  });
  if (!exists) newCart.push(newItem);
  return newCart;
};

export default cart;