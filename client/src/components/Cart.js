import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import cartService from "../services/cart";
import cartActions from "../actions/cartActions";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCart = async () => {
      const data = await cartService.getAllCartItems();
      dispatch(cartActions.getAllCartItemsSuccess(data));
    };
    fetchCart();
  }, [dispatch]);

  const handleCheckout = async e => {
    e.preventDefault();
    await cartService.postCheckout();
    dispatch(cartActions.postCheckoutSuccess());
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
