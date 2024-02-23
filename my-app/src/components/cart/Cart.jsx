import React from "react";
import './cart.scss';
import { MyContext } from "../../MyContext";

function Cart() {

    const { arrayCart, modalActive, setModalActive } = React.useContext(MyContext)

    const calculateTotal = () => {
        return arrayCart.reduce((total, item) => {
            return total + item.count * item.price;
        }, 0);
    };

    return (
        <div className={modalActive ? "cart active" : "cart"}>
            <div className={modalActive ? "cart__content active" : "cart__content"}>
                <img onClick={() => setModalActive(false)} className="cart__close" src="img/icon/close.png" alt="" />
                <div className="cart__items">
                    {arrayCart.map((item, index) => (
                        <div className="cart__item" key={index}>
                            <img className="cart__item-img" src={item.img} alt="" />
                            <h2 className="cart__item-title">{item.title}</h2>
                            <h3 className="cart__item-price">{arrayCart.find(cartItem => cartItem.id === item.id).count * arrayCart.find(cartItem => cartItem.id === item.id).price} $</h3>
                            <h3 className="cart__item-count">{arrayCart.find(cartItem => cartItem.id === item.id)?.count || 0}</h3>
                        </div>
                    ))}
                </div>
                <div className="cart__function">
                    <h2 className="">{calculateTotal()} $</h2>
                    <button className="button">Оплата</button>
                </div>
            </div>
        </div>
    )

}

export default Cart;