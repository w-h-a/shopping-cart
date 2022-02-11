import { useSelector, useDispatch } from "react-redux";
import productActions from "../actions/productActions";
import productService from "../services/products";

const AddProductForm = () => {
  const isAddingProduct = useSelector(state => state.products.isAddingProduct);
  const dispatch = useDispatch();

  const toggleForm = e => {
    e.preventDefault();
    dispatch(productActions.toggleAddProductForm());
  }

  const addProduct = async e => {
    e.preventDefault();
    const product = {
      title: e.target[0].value,
      price: e.target[1].value,
      quantity: e.target[2].value,
    };
    const newProduct = await productService.postProduct(product);
    e.target.reset();
    dispatch(productActions.postProductSuccess(newProduct));
  };

  return (
    <div className={isAddingProduct ? "add-form visible" : "add-form"}>
      <p>
        <a
          href="_blank"
          className="button add-product-button"
          onClick={toggleForm}
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={addProduct}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" />
        </div>

        <div className="actions form-actions">
          <button
            className="button"
            type="submit"
          >
            Add
          </button>
          <a
            href="_blank"
            className="button"
            onClick={toggleForm}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
