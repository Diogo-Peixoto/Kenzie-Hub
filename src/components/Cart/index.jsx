import CardProduct from "../CartProduct";
import { CartStyle, CartTotal } from "./style";

function Card({ productsCart, setproductsCart }) {
  return (
    <CartStyle>
      <h3 className="heading3">Carrinho de compras</h3>
      <ul>
        {productsCart[0] ? (
          productsCart.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              setproductsCart={setproductsCart}
              productsCart={productsCart}
            />
          ))
        ) : (
          <div className="noneCartProducts">
            <h4 className="heading3">Sua sacola está vazia</h4>
            <p className="body">Adicione itens</p>
          </div>
        )}
      </ul>
      {productsCart[0] && (
        <CartTotal>
          <p className="headline">Total</p>
          <span className="body">
            R${" "}
            {productsCart
              .reduce((a, b) => a + b.price * b.amount, 0)
              .toFixed(2)}
          </span>
          <button onClick={() => setproductsCart([])}>Remover todos </button>
        </CartTotal>
      )}
    </CartStyle>
  );
}

export default Card;
