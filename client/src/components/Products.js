import Product from "./Product";

const Products = ({ products, onUpdate, onAdd, onDelete}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
        products
          .map(product =>
            <Product key={product.id} product={product} onUpdate={onUpdate} onAdd={onAdd} onDelete={onDelete}/>
          )
      }
    </div>
  );
};

export default Products;
