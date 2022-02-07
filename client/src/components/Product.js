import { useState } from "react";
import EditForm from "./EditForm";

const ProductAction = ({ handler }) =>
  <div className="actions product-actions">
    <a className="button add-to-cart">Add to Cart</a>
    <a className="button edit" onClick={handler}>Edit</a>
  </div>

const Product = ({ title, price, quantity }) => {
  const [ editing, setEditing ] = useState(false);

  const toggleEdit = e => {
    e.preventDefault();
    setEditing(!editing);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {
          editing
            ? <EditForm toggleEdit={toggleEdit} />
            : <ProductAction handler={toggleEdit} />
        }
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
