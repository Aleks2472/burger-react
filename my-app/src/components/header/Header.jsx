import React from "react";
import './header.scss';
import { MyContext } from "../../MyContext";

function Header() {

    const { setModalActive } = React.useContext(MyContext)

    return (
        <header className="header">
            <div className="container header__container">
                <img src="img/logo/logo.svg" alt="" />
                <nav className="header__naw">
                    <ul className="header__menu-list">
                        <li className="header__menu-item"><a href="#">Почему у нас</a></li>
                        <li className="header__menu-item"><a href="#">Меню бургеров</a></li>
                        <li className="header__menu-item"><a href="#">Оформление заказа</a></li>
                    </ul>
                </nav>
                <span onClick={() => setModalActive(true)}><img src="img/icon/cart-white.png" alt="" /></span>
            </div>
        </header>
    )

}

export default Header