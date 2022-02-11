import { useSelector, useDispatch } from "react-redux";
import productActions from "../actions/productActions";
import EditForm from "./EditForm";
import cartActions from "../actions/cartActions";

const ProductControls = ({ product }) => {
  const editingProductIds = useSelector(state => state.products.editingProductIds);
  const dispatch = useDispatch();

  const edit = e => {
    e.preventDefault();
    dispatch(productActions.setEditingProductId(product.id));
  };

  const insertIntoCart = e => {
    e.preventDefault();
    if (product.quantity > 0) {
      dispatch(cartActions.createCartItem(product.id));
    } else {
      alert("absolutely not!");
    }
  }

  return (
    <>
      {
        editingProductIds.includes(product.id)
          ? <EditForm product={product} />
          : <div className="actions product-actions">
              <a
                href="_blank"
                className="button add-to-cart"
                onClick={insertIntoCart}
              >
                Add to Cart
              </a>
              <a
                href="_blank"
                className="button edit"
                onClick={edit}
              >
                Edit
              </a>
            </div>
      }
    </>
  );
};

export default ProductControls;
