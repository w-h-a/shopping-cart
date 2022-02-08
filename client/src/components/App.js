import { useState, useEffect } from "react";

import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";

import { getAllProducts, addProduct, deleteProduct, updateProduct } from '../services/products';
import { getCart, addToCart } from '../services/carts';

const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);

  const handleUpdateProduct = async (id, productName, price, quantity) => {
    const updatedProduct = await updateProduct(id, productName, price, quantity);
    const newProductList = products.map(product => {
      if (product.id === id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setProducts(newProductList);
  };

  const handleAddToCart = async productId => {
    const newCartItem = await addToCart(productId);
    const newProducts = await getAllProducts();
    setProducts(newProducts);
    setCart([...cart, newCartItem]);
  };

  const handleCreateProduct = async (productName, price, quantity) => {
    const newProduct = await addProduct(productName, price, quantity);
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = async productId => {
    await deleteProduct(productId);
    const newProductList = products.filter(product => product.id !== productId);
    setProducts(newProductList);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    const fetchCart = async () => {
      const data = await getCart();
      setCart(data);
    };
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cart={cart}/>
      </header>
      <main>
        <Products products={products} onUpdate={handleUpdateProduct} onAdd={handleAddToCart} onDelete={handleDeleteProduct}/>
        <Form onCreateProduct={handleCreateProduct} />
      </main>
    </div>
  );
};

export default App;
