import Product from "./Product";

const Products = ({ products }) =>
  <div className="product-listing">
    <h2>Products</h2>
    {
      products
        .map(product =>
          <Product key={product.id} {...product} />
        )
    }
  </div>

export default Products;
