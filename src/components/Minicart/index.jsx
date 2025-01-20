import { useShoppingCart } from '../../context/ShoppingCartContext';
import MiniCartItem from './MiniCartItem/MiniCartItem';
import { fetchProducts } from "../../data/product";
import closeIcon from "../../assets/svgs/closeIcon.svg";
import "./Minicart.scss";
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Minicart = ( { isOpen } ) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  const { cartItems, closeCart } = useShoppingCart();

  return (
    <>  
      <div className={isOpen ? "containerMinicart CartDrawerShown" : "containerMinicart CartDrawerHidden"}>
        <div> 
          <div className="containerTitleMinicart" onClick={closeCart}> 
            <img src={closeIcon} alt="Close Icon" className="closeIcon"/>
            <span>Meu Carrinho</span>
          </div>
          <div className="containerMinicartItens">
            {cartItems.map(item => (
              <MiniCartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
        
        <div className="containerTotalCart">
          <div className="totalCart">
            Total:
          </div>
          <div className="valueTotalCart">
            {
              cartItems.reduce((total, cartItem) => {
                const item = products.find(i => i.productId === cartItem.id);
                return total + ((item?.price / 100) || 0) * cartItem.quantity;
              }, 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="CartDrawerOverlay"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Minicart;
