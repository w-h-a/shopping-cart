import { useEffect } from "react";

import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";
import { useDispatch} from "react-redux";

import { getAllProducts, addProduct, deleteProduct, updateProduct } from '../services/products';
import { getCart, addToCart } from '../services/carts';
import { productUpdated, setProducts, createProduct, deleteProductAction } from "../actions/productsActions";
import { addCartItem, setCart } from "../actions/cartActions";

const App = () => {
  const dispatch = useDispatch();

  const handleUpdateProduct = async (id, productName, price, quantity) => {
    const updatedProduct = await updateProduct(id, productName, price, quantity);
    dispatch(productUpdated(updatedProduct));
  };

  const handleAddToCart = async productId => {
    const newCartItem = await addToCart(productId);
    const transformedItem = { ...newCartItem.product, id: newCartItem.product._id };
    dispatch(productUpdated(transformedItem))
    dispatch(addCartItem(newCartItem.item))    
  };

  const handleCreateProduct = async (productName, price, quantity) => {
    const newProduct = await addProduct(productName, price, quantity);
    dispatch(createProduct(newProduct));
  };

  const handleDeleteProduct = async productId => {
    await deleteProduct(productId);
    dispatch(deleteProductAction(productId))
  };
  
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
        <Products onUpdate={handleUpdateProduct} onAdd={handleAddToCart} onDelete={handleDeleteProduct}/>
        <Form onCreateProduct={handleCreateProduct} />
      </main>
    </div>
  );
};

export default App;
