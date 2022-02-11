import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <table className="cart-items">
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {
          cartItems
            .map(cartItem =>
              <tr key={cartItem._id}>
                <td>{cartItem.title}</td>
                <td>{cartItem.quantity}</td>
                <td>${cartItem.price}</td>
              </tr>
            )
        }
        <tr>
          <td colSpan="3" className="total">
            Total: $
            {
              cartItems
                .reduce((acc, cartItem) =>
                  acc + cartItem.quantity * cartItem.price
                , 0)
                .toFixed(2)
            }
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItems;
