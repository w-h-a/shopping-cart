import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import cartActions from "../actions/cartActions";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()

  useEffect(() => dispatch(cartActions.readAllCartItems()), [dispatch]);

  const handleCheckout = e => {
    e.preventDefault();
    dispatch(cartActions.createCheckout());
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {
        cartItems.length === 0
          ? <>
              <p>Fill your cart!</p>
              <p>Total: $0</p>
            </>
          : <CartItems />
      }
      <a
        href="_blank"
        className={cartItems.length === 0 ? "button checkout disabled" : "button checkout"}
        onClick={handleCheckout}
      >
        Checkout
      </a>
    </div>
  );
};

export default Cart;
