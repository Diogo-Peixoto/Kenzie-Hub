import { Product } from "./style";

function CardProduct({ product, setproductsCart, productsCart }) {
  function remove() {
    if (product.amount > 1) {
      const newArryCart = productsCart.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            amount: element.amount - 1,
          };
        }
        return element;
      });

      setproductsCart(newArryCart);
    } else {
      setproductsCart((oldProducCart) =>
        oldProducCart.filter((element) => element !== product)
      );
    }
  }

  return (
    <Product>
      <figure>
        <img src={product.img} alt="" />
      </figure>

      <div className="boxInformations">
        <div>
          <h4>{product.name}</h4>
          <p className="caption">{product.category}</p>
        </div>
        <div>
          <span onClick={remove}>Remover</span>
          <p className="caption">Qtd: {product.amount}</p>
        </div>
      </div>
    </Product>
  );
}

export default CardProduct;
