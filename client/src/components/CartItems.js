import { useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector(state => state.cart);
  const cartTotal = calculateTotal(cart).toFixed(2);

  function calculateTotal(cart) {
    return cart.reduce( (sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  };

  const CartItem = ({item}) => {
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
      </tr>
    );
  };

  return (
    <table className="cart-items">
      <tbody>
        <tr><th>Item</th><th>Quantity</th><th>Price</th></tr>
        {cart.map(item => <CartItem key={item.title} item={item} />)}
        <tr><td colSpan="3" className="total"> Total: ${cartTotal}</td></tr>
      </tbody>
    </table>
  );
};

export default CartItems;