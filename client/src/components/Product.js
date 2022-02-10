import { useState } from "react";
import { useDispatch } from 'react-redux';
import productService from "../services/products";
import productActions from "../actions/productActions";
import EditForm from './EditForm';
import ProductControls from "./ProductControls";

const Product = ({ product }) => {
  const [ editing, setEditing ] = useState(false);
  const { title, price, quantity, id } = product;
  const dispatch = useDispatch();

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  const handleDelete = async e => {
    e.preventDefault();
    await productService.deleteProduct(id);
    dispatch(productActions.productDeleted(id));
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
            : <ProductControls productId={id} quantity={quantity} onEdit={toggleEdit} />
        }
        <a href="_blank" className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  );
};

export default Product;
