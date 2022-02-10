import { useDispatch } from "react-redux";
import cartService from "../services/carts";
import productActions from "../actions/productActions";
import cartActions from "../actions/cartActions";

const ProductControls = ({ productId, quantity, onEdit }) => {
  const dispatch = useDispatch();

  const handleAdd = async e => {
    e.preventDefault();
    if (quantity > 0) {
      const newCartItem = await cartService.addToCart(productId);
      dispatch(productActions.productUpdated(newCartItem.product));
      dispatch(cartActions.itemAdded(newCartItem.item));
    } else {
      alert("Cannot add out of stock item to cart!");
    }
  };

  return (
    <div className="actions product-actions">
      <a href="_blank" className="button add-to-cart" onClick={handleAdd}>Add to Cart</a>
      <a href="_blank" className="button edit" onClick={onEdit}>Edit</a>
    </div>
  );
};

export default ProductControls;