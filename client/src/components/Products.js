import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import productActions from "../actions/productActions";

const Products = () => {
  const products = useSelector(state => state.products.ps);
  const dispatch = useDispatch();

  useEffect(() => dispatch(productActions.readAllProducts()), [dispatch]);

  return (
    <div className="product-listing">
      <h2>Step Right Up!</h2>
      {
        products
          .map(product =>
            <Product key={product.id} product={product} />
          )
      }
    </div>
  )
};

export default Products;
