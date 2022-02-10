import { useSelector } from "react-redux";
import Product from "./Product";


const Products = () => {
  const products = useSelector(state => state.products);
  
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default Products;
