import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import data from "../lib/data";

// Header
    // Cart
// Main
    // Products
        // Product
    // Form

const App = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => setProducts(data), []);

  return (
    <div id="app">
      <Header />
      <Main products={products}/>
    </div>
  );
};

export default App;
