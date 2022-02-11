import { useSelector, useDispatch } from "react-redux";
import cartActions from "../actions/cartActions";
import cartService from "../services/carts";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const BUTTON_CLASS = 'button checkout'
  const DISABLED_BUTTON_CLASS = BUTTON_CLASS + ' disabled';

  const buttonClass = cart => {
    if (cartQuantity === 0) {
      return DISABLED_BUTTON_CLASS;
    } else {
      return BUTTON_CLASS;
    }
  };

  const handleCheckout = async e => {
    e.preventDefault();
    await cartService.checkoutCart();
    dispatch(cartActions.itemDeleted());
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : <p>You have {cartQuantity} items in cart.</p>}
      <a href="_blank" className={buttonClass(cart)} onClick={handleCheckout}>Checkout</a>
      {(cartQuantity > 0) ? <CartItems /> : null}
    </div>
  );
};

export default Cart;