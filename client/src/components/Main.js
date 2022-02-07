import Products from "./Products";
import Form from "./Form";

const Main = ({ products }) =>
  <main>
    <Products products={products}/>
    <Form />
  </main>

export default Main;
