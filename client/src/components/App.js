import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";

const App = () => {
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
