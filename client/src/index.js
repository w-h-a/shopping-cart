import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { ProductProvider } from './context/productContext';
import { CartProvider } from './context/cartContext';

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
