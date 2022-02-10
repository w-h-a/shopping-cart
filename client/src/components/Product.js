import { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteProduct } from "../services/products";
import { deleteProductAction } from "../actions/productsActions";
import EditForm from './EditForm';
import ProductAction from "./ProductAction";

const Product = ({ product, onUpdate }) => {
  const [ editing, setEditing ] = useState(false);
  const { title, price, quantity, id } = product;
  const dispatch = useDispatch();

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  const handleDelete = async e => {
    e.preventDefault();
    await deleteProduct(id);
    dispatch(deleteProductAction(id));
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
            : <ProductAction productId={id} quantity={quantity} onEdit={toggleEdit} />
        }
        <a href="_blank" className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  );
};

export default Product;
