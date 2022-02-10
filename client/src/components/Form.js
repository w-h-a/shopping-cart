import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../services/products';
import { createProduct } from '../actions/productsActions';

const Form = () => {
  const [ formVisible, setFormVisible ] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const toggleForm = e => {
    e.preventDefault();
    setFormVisible(!formVisible);
  };

  const resetForm = () => {
    setProductName('');
    setPrice('');
    setQuantity('');
  };

  const handleCreateProduct = async e => {
    e.preventDefault();
    const newProduct = await addProduct(productName, price, quantity);
    dispatch(createProduct(newProduct));
    resetForm();
    toggleForm(e);
  };

  return (
    <div className={formVisible ? 'add-form visible' : 'add-form'}>
      <p><a href="_blank" className="button add-product-button" onClick={toggleForm}>Add A Product</a></p>
      <h3>Add Product</h3>
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
          <a href="_blank" className="button" onClick={handleCreateProduct}>Add</a>
          <a href="_blank" className="button" onClick={toggleForm}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default Form;
