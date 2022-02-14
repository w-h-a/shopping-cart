import { useReducer, createContext } from 'react';
import cartService from '../services/cart';
import { updateProduct } from './productContext';

const CartContext = createContext();

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'CART_RECEIVED':
      return action.payload.cartItems;
    case 'ADDED_TO_CART':
      let exists = false;
      const newCart = state.map(item => {
        if (item.productId === action.payload.cartItem.productId) {
          exists = true;
          return action.payload.cartItem;
        } else {
          return item;
        }
      });
      if (!exists) newCart.push(action.payload.cartItem);
      return newCart;
    case 'CART_CHECKED_OUT':
      return [];
    default:
      return state;
  };
};

const getCart = async (dispatch) => {
  const cartItems = await cartService.getCart();
  dispatch({ type: 'CART_RECEIVED', payload: { cartItems }});
};

const addToCart = async (cartDispatch, productDispatch, productId) => {
  const strangeChimera = await cartService.addToCart(productId);
  cartDispatch({ type: 'ADDED_TO_CART', payload: { cartItem: strangeChimera.item }})
  const updatedProduct = { ...strangeChimera.product, id: strangeChimera.product._id };
  updateProduct(productDispatch, updatedProduct);
};

const checkoutCart = async (dispatch) => {
  await cartService.checkoutCart();
  dispatch({ type: 'CART_CHECKED_OUT' });
};

const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { 
  CartContext, 
  CartProvider,
  addToCart,
  getCart,
  checkoutCart,
};