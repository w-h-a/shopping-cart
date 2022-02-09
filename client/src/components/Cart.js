const Cart = ({ cart, onCheckout }) => {
  const handleCheckout = (e) => {
    e.preventDefault();
    onCheckout();
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : <p>You have {calculateCartItems(cart)} items in cart.</p>}
      <a href="_blank" className={generateButtonClass(cart)} onClick={handleCheckout}>Checkout</a>
      {(calculateCartItems(cart) > 0) ? <CartItems cart={cart} /> : null}
    </div>
  );
};

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

function calculateTotal(cart) {
  return cart.reduce( (sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

export default Cart;

const CartItems = ({ cart }) => {

  return (
    <table className="cart-items">
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>

        {cart.map(item => {
          return <CartItem key={item.title} item={item} />
        })}

        <tr>
          <td colSpan="3" className="total"> Total: ${calculateTotal(cart).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

const CartItem = ({item}) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
    </tr>
  );
};
