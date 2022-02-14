import { useReducer, createContext } from 'react';
import productService from '../services/products';

const ProductContext = createContext();

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return action.payload.products;
    case 'PRODUCT_ADDED':
      return state.concat(action.payload.newProduct);
    case 'PRODUCT_DELETED':
      return state.filter(product => {
        return product.id !== action.payload.productId;
      });
    case 'PRODUCT_UPDATED':
      return state.map(product => {
        if (product.id === action.payload.updatedProduct.id) {
          return action.payload.updatedProduct;
        } else {
          return product;
        }
      });
    default:
      return state;
  };
};

const updateProduct = async (dispatch, product) => {
  const updatedProduct = await productService.updateProduct(product);
  dispatch({ type: "PRODUCT_UPDATED", payload: { updatedProduct }});
};

const getProducts = async (dispatch) => {
  const products = await productService.getAllProducts();
  dispatch({ type: "PRODUCTS_RECEIVED", payload: { products } });
};

const createProduct = async (dispatch, product, callback) => {
  const newProduct = await productService.addProduct(product);
  dispatch({ type: "PRODUCT_ADDED", payload: { newProduct } });
  if (callback) callback();
};

const deleteProduct = async (dispatch, productId) => {
  await productService.deleteProduct(productId);
  dispatch({ type: "PRODUCT_DELETED", payload: { productId } });
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { 
  ProductContext, 
  ProductProvider,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};