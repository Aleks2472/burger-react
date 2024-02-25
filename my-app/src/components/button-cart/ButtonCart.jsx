import React from "react";
import './buttonCart.scss';
import { MyContext } from "../../MyContext";

function ButtonCart() {

    const { arrayCart, setModalActive } = React.useContext(MyContext)

    const totalQuantity = arrayCart.reduce((total, item) => total + item.count, 0);

    return (
        <span onClick={() => setModalActive(true)} className="button-cart"><img src="img/icon/cart-white.png" alt="" /> {totalQuantity}</span>
    )

}

export default ButtonCart;