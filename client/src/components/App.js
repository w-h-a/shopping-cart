import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";

import productService from '../services/products';
import cartService from '../services/carts';
import productActions from "../actions/productActions";
import cartActions from "../actions/cartActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productService.getAllProducts();
      dispatch(productActions.setProducts(data));
    };
    const fetchCart = async () => {
      const data = await cartService.getCart();
      dispatch(cartActions.setCart(data))
    };
    fetchProducts();
    fetchCart();
  }, [dispatch]);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <Products />
        <Form />
      </main>
    </div>
  );
};

export default App;
