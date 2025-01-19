// import React from 'react';
import '../Header.scss';
import corebiz_logo from "../../../assets/svgs/site-logo-corebiz-preto-cinza.svg"
import user_icon from "../../../assets/svgs/user 1.svg"
import search_icon from "../../../assets/svgs/magnifying-glass 1.svg"
import cart_icon from "../../../assets/svgs/shopping-cart 1.svg"

const Header = () => {
    return (
        <>
            <div className="header__desktop">
                <div className="container">
                    <div className="header__logo">
                        <img src={corebiz_logo} className="corebiz-logo" alt="Corebiz logo" />
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
                        <div className="header__icons">
                            <button className="account" aria-label="Minha Conta">
                                <img src={user_icon} className="user-icon" alt="User Icon" />
                                <p>Minha conta</p>
                            </button>
                            <button className="cart" aria-label="Minicart">
                                <img src={cart_icon} className="cart-icon" alt="Cart Icon" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Header;
