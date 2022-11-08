import { CardStyle } from "./style";

function Card({ product, setproductsCart, productsCart }) {
  function addProductInCart() {
    if (productsCart.some((elment) => elment.id === product.id)) {
      const newProductsCart = productsCart.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            amount: element.amount + 1,
          };
        }
        return element;
      });
      setproductsCart(newProductsCart);
    } else {
      setproductsCart((oldproductsCart) => [...oldproductsCart, product]);
    }
  }

  return (
    <CardStyle>
      <div>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
      </div>
      <section>
        <h3 className="heading3">{product.name}</h3>
        <p className="caption">{product.category}</p>
        <span className="body">R$ {product.price.toFixed(2)}</span>
        <button className="button button-primary" onClick={addProductInCart}>
          Adiconar
        </button>
      </section>
    </CardStyle>
  );
}

export default Card;
