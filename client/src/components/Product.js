import { useState, useContext } from "react";

import { ProductContext, deleteProduct } from '../context/productContext';
import { CartContext, addToCart } from '../context/cartContext';
import EditForm from "./EditForm";

const ProductAction = ({ productId, quantity, onEdit }) => {
  const { dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: productDispatch } = useContext(ProductContext);

  const handleAdd = e => {
    e.preventDefault();
    if (quantity > 0) {
      addToCart(cartDispatch, productDispatch, productId) ;
    } else {
      alert("no");
    }
  };

  return (
    <div className="actions product-actions">
      <a href="_blank" className="button add-to-cart" onClick={handleAdd}>Add to Cart</a>
      <a href="_blank" className="button edit" onClick={onEdit}>Edit</a>
    </div>
  );
};

const Product = ({ product }) => {
  const [ editing, setEditing ] = useState(false);
  const { dispatch } = useContext(ProductContext);

  const { title, price, quantity, id } = product;

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteProduct(dispatch, id);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {
          editing
            ? <EditForm product={product} toggleEdit={toggleEdit}/>
            : <ProductAction productId={id} quantity={quantity} onEdit={toggleEdit} />
        }
        <a href="_blank" className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  );
};

export default Product;
