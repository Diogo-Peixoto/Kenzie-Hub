import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card";
import { BoxList } from "./style";

function ProductList({ setproductsCart, productsCart, search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return search !== "" ? (
    <BoxList>
      {products
        .filter((element) => {
          const textData = `${element.name}${element.category}`.toLowerCase();

          if (textData.match(search.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        })
        .map((product) => (
          <Card
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              category: product.category,
              price: product.price,
              img: product.img,
              amount: 1,
            }}
            setproductsCart={setproductsCart}
            productsCart={productsCart}
          />
        ))}
    </BoxList>
  ) : (
    <BoxList>
      {products.map((product) => (
        <Card
          key={product.id}
          product={{
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            img: product.img,
            amount: 1,
          }}
          setproductsCart={setproductsCart}
          productsCart={productsCart}
        />
      ))}
    </BoxList>
  );
}

export default ProductList;

/*products.map((product) => (
        <Card
          key={product.id}
          product={{
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            img: product.img,
            amount: 1,
          }}
          setproductsCart={setproductsCart}
          productsCart={productsCart}
        />
      ))*/
