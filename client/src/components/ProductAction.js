import { useDispatch } from "react-redux";
import { addToCart } from "../services/carts";
import { productUpdated } from "../actions/productsActions";
import { addCartItem } from "../actions/cartActions";

const ProductAction = ({ productId, quantity, onEdit }) => {
  const dispatch = useDispatch();

  const handleAdd = async e => {
    e.preventDefault();
    if (quantity > 0) {
      const newCartItem = await addToCart(productId);
      const transformedItem = { ...newCartItem.product, id: newCartItem.product._id };
      dispatch(productUpdated(transformedItem));
      dispatch(addCartItem(newCartItem.item));
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

export default ProductAction;