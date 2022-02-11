import { useDispatch } from "react-redux";
import ProductControls from "./ProductControls";
import productService from "../services/products";
import productActions from "../actions/productActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = async e => {
    e.preventDefault();
    await productService.deleteProduct(product.id)
    dispatch(productActions.deleteProductSuccess(product.id));
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <ProductControls product={product} />
        <a
          href="_blank"
          className="delete-button"
          onClick={handleDelete}
        >
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
