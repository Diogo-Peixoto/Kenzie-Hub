import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { DivApp } from "./style/style";

function App() {
  const [productsCart, setproductsCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <DivApp>
      <Header setSearch={setSearch} />
      {search !== "" && (
        <h1 className="container">
          Resultados para: <span>{search}</span>
        </h1>
      )}
      <main className="container">
        <ProductList
          setproductsCart={setproductsCart}
          productsCart={productsCart}
          search={search}
        />
        <Cart productsCart={productsCart} setproductsCart={setproductsCart} />
      </main>
    </DivApp>
  );
}

export default App;
