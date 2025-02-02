import '../Header.scss';
import corebiz_logo from "../../../assets/svgs/site-logo-corebiz-preto-cinza.svg"
import search_icon from "../../../assets/svgs/magnifying-glass 1.svg"
import cart_icon from "../../../assets/svgs/shopping-cart 1.svg"
import icon_burguer from "../../../assets/svgs/icon_burguer.svg"
import { useShoppingCart } from '../../../context/ShoppingCartContext'

const Header = () => {

    const { cartQuantity, openCart } = useShoppingCart()
    
    return (
        <>
            <div className="header__mobile">
                <div className="container">

                    <div className="header__menu-burguer">
                        <img src={icon_burguer} className="icon-burguer" alt="Icon Burguer" />
                    </div>

                    <div className="header__logo">
                        <img src={corebiz_logo} className="corebiz-logo" alt="Corebiz logo" />
                    </div>


                    <div className="header__icons">
                        <button className="cart" aria-label="Minicart" onClick={openCart}>
                            <img src={cart_icon} className="cart-icon" alt="Cart Icon" />
                            {cartQuantity > 0 && (
                                <span>{cartQuantity}</span>
                            )}
                        </button>
                    </div>


                </div>

                <div className="subcontainer">
                    <div className="header__search">
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="O que está procurando? "
                        />
                        <img src={search_icon} className="search-icon" alt="Search Icon" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;
