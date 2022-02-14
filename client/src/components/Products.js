import { useContext, useEffect } from 'react';

import Product from "./Product";
import { ProductContext, getProducts } from '../context/productContext';

const Products = () => {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
        products
          .map(product =>
            <Product key={product.id} product={product} />
          )
      }
    </div>
  );
};

export default Products;
