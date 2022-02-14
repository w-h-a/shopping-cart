import { useState, useContext } from 'react';
import { ProductContext, updateProduct } from '../context/productContext';

const EditForm = ({ product, toggleEdit }) => {
  const [productName, setProductName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const { dispatch } = useContext(ProductContext);

  const handleUpdate = e => {
    e.preventDefault();
    const updatedProduct = {
      title: productName,
      price,
      quantity,
      id: product.id,
    };
    updateProduct(dispatch, updatedProduct);
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
