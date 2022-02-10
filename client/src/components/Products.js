import { useSelector } from "react-redux";
import Product from "./Product";


const Products = ({ onUpdate, onDelete}) => {
  const products = useSelector(state => state.products);
  
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
        products
          .map(product =>
            <Product key={product.id} product={product} onUpdate={onUpdate} onDelete={onDelete}/>
          )
      }
    </div>
  );
};

export default Products;
