import { useState, useEffect } from "react";

import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";
import { useSelector, useDispatch} from "react-redux";

import { getAllProducts, addProduct, deleteProduct, updateProduct } from '../services/products';
import { getCart, addToCart, checkoutCart } from '../services/carts';
import { productUpdated, setProducts } from "../actions/productsActions";


const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const dispatch = useDispatch();

  const handleUpdateProduct = async (id, productName, price, quantity) => {
    const updatedProduct = await updateProduct(id, productName, price, quantity);
    //dispatch action to a reducer
    dispatch(productUpdated(updatedProduct));

    // react hook
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
    updateProducts(newCartItem.product)

    updateCart(newCartItem.item);
  };

  const updateCart = (newItem) => {
    let exists = false;

    const newCart = cart.map(item => {
      if (item.productId === newItem.productId) {
        exists = true;
        return newItem
      } else {
        return item;
      }
    });

    if (!exists) newCart.push(newItem);

    setCart(newCart);
  }

  const updateProducts = (newProduct) => {

    newProduct = { ...newProduct, id: newProduct._id };

    const newProducts = products.map(product => {
      return product.id === newProduct.id ? newProduct : product;
    });

    setProducts(newProducts);
  }

  const handleCreateProduct = async (productName, price, quantity) => {
    const newProduct = await addProduct(productName, price, quantity);
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = async productId => {
    await deleteProduct(productId);
    const newProductList = products.filter(product => product.id !== productId);
    setProducts(newProductList);
  };

  const handleCheckout = async () => {
    await checkoutCart();
    setCart([]);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      // redux store
      dispatch(setProducts(data));

      // react hook 
      setProducts(data);
    };
    const fetchCart = async () => {
      const data = await getCart();
      setCart(data);
    };
    fetchProducts();
    fetchCart();
  }, [dispatch]);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cart={cart} onCheckout={handleCheckout} />
      </header>
      <main>
        <Products products={products} onUpdate={handleUpdateProduct} onAdd={handleAddToCart} onDelete={handleDeleteProduct}/>
        <Form onCreateProduct={handleCreateProduct} />
      </main>
    </div>
  );
};

export default App;
