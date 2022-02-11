import Cart from "./Cart";
import Products from "./Products";
import AddProductForm from "./AddProductForm";

const App = () =>
  <div id="app">
    <header>
      <h1>Shop 'til Ya Drop!</h1>
      <Cart />
    </header>
    <main>
      <Products />
      <AddProductForm />
    </main>
  </div>

export default App;
