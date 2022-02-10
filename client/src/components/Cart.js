import { useSelector, useDispatch } from "react-redux";
import { deleteCartItems } from "../actions/cartActions";
import { checkoutCart } from "../services/carts";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function generateButtonClass(cart) {
    if (calculateCartItems(cart) === 0) {
      return "button checkout disabled";
    } else {
      return "button checkout";
    }
  }

  function calculateCartItems(cart) {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  const handleCheckout = async (e) => {
    e.preventDefault();

    await checkoutCart();
    dispatch(deleteCartItems());
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : <p>You have {calculateCartItems(cart)} items in cart.</p>}
      <a href="_blank" className={generateButtonClass(cart)} onClick={handleCheckout}>Checkout</a>
      {(calculateCartItems(cart) > 0) ? <CartItems /> : null}
    </div>
  );
};

export default Cart;