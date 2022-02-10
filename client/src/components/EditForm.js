import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../services/products';
import { productUpdated } from '../actions/productsActions';

const EditForm = ({ product, toggleEdit }) => {

  const [productName, setProductName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleUpdate = async e => {
    e.preventDefault();
    const updatedProduct = await updateProduct(product.id, productName, price, quantity);
    dispatch(productUpdated(updatedProduct));
    toggleEdit(e);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={productName}
                 onChange={e => setProductName(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price}
                 onChange={e => setPrice(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity}
                 onChange={e => setQuantity(e.target.value)} />
        </div>

        <div className="actions form-actions">
          <a href="_blank" className="button" onClick={handleUpdate}>Update</a>
          <a href="_blank" className="button" onClick={toggleEdit}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
