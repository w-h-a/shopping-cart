const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const newItem = action.payload.cartItem;
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
    case "SET_CART":
      return action.payload.cartItems;
    case "DELETE_CART_ITEMS":
      return [];
    default:
      return state;
  };
};

export default cart;


/*


  const updateCart = (newItem) => {
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

    setCart(newCart);
  }

  */