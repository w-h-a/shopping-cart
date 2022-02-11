import { useState } from 'react';
import { useDispatch } from 'react-redux';
import productService from '../services/products';
import productActions from '../actions/productActions';

const EditForm = ({ product }) => {
  const [productName, setProductName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleCancel = async e => {
    e.preventDefault();
    dispatch(productActions.removeEditingProductId(product.id));
  };

  const handleUpdate = async e => {
    e.preventDefault();
    const updatedProduct = await productService.putProduct({ id: product.id, title: productName, price, quantity });
    dispatch(productActions.putProductSuccess(updatedProduct));
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)} 
          />
        </div>

        <div className="actions form-actions">
          <a href="_blank" className="button" onClick={handleUpdate}>Update</a>
          <a href="_blank" className="button" onClick={handleCancel}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
