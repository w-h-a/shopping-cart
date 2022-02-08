const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : <p>You have {cart.length} items in cart.</p>}
      <p>Total: $0</p>
      <a href="_blank" className="button checkout disabled">Checkout</a>
    </div>
  );
};

export default Cart;