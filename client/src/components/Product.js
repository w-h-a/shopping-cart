import { useState } from "react";
import EditForm from "./EditForm";

const ProductAction = ({ productId, quantity, onEdit, onAdd }) => {

  const handleAdd = e => {
    e.preventDefault();
    if (quantity > 0) {
      onAdd(productId);
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

const Product = ({ product, onUpdate, onAdd, onDelete }) => {
  const [ editing, setEditing ] = useState(false);

  const { title, price, quantity, id } = product;

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  const handleDelete = e => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {
          editing
            ? <EditForm product={product} toggleEdit={toggleEdit} onUpdate={onUpdate}/>
            : <ProductAction productId={id} quantity={quantity} onEdit={toggleEdit} onAdd={onAdd} />
        }
        <a href="_blank" className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  );
};

export default Product;
