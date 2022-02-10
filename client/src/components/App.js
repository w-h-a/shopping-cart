import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";

import { getAllProducts } from '../services/products';
import { getCart } from '../services/carts';
import { setProducts } from "../actions/productsActions";
import { setCart } from "../actions/cartActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data));
    };
    const fetchCart = async () => {
      const data = await getCart();
      dispatch(setCart(data))
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
