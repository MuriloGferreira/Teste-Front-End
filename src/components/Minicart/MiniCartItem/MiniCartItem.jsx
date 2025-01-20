import { useEffect, useState } from "react";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { fetchProducts } from "../../../data/product";
import deleteIcon from "../../../assets/svgs/trash.svg";

import "./MiniCartItem.scss";

// eslint-disable-next-line react/prop-types
function MinicartItem({ id, quantity }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const item = products.find((i) => i.productId === id);

  if (!item) return null;

  return (
    <section className="containerMiniCartItem">
      <div className="miniCartItem">
        {/* Imagem do produto */}
        <img className="miniCartItemImage" src={item.imageUrl} alt={item.productName} />

        <div className="miniCartItemData">
          {/* Nome do produto */}
          <div className="miniCartItemName">{item.productName}</div>

          {/* Preço original e atual */}
          <div className="miniCartItemPrice">
            {item.listPrice && (
              <span className="miniCartItemListPrice">
                {(item.listPrice / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            )}
            <span className="miniCartItemCurrentPrice">
              {(item.price / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          {/* Controle de quantidade */}
          <div className="miniCartItemQuantity">
            <button onClick={() => decreaseCartQuantity(item.productId)}>-</button>
            <span className="miniCartItemQuantityNumber">{quantity}</span>
            <button onClick={() => increaseCartQuantity(item.productId)}>+</button>
          </div>
        </div>
      </div>

      {/* Botão de remover */}
      <button
        className="miniCartItemRemove"
        onClick={() => removeFromCart(item.productId)}
      >
        <img src={deleteIcon} alt="Remove item" />
      </button>
    </section>
  );
}

export default MinicartItem;
