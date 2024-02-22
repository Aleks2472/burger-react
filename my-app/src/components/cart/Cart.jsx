import React from "react";
import './cart.scss';
import { MyContext } from "../../MyContext";

function Cart() {

    const { arrayCart } = React.useContext(MyContext)
    const { modalActive, setModalActive } = React.useContext(MyContext)
    console.log(arrayCart)

    return (
        <div className={modalActive ? "cart active" : "cart"}>
            <div className={modalActive ? "cart__content active" : "cart__content"}>
                <img onClick={() => setModalActive(false)} className="cart__close" src="img/icon/close.png" alt="" />
                <div className="cart__items">
                    {arrayCart.map((item, index) => (
                        <div className="cart__item" key={index}>
                            <img className="cart__item-img" src={item.img} alt="" />
                            <h2 className="cart__item-title">{item.title}</h2>
                            <h3 className="cart__item-price">100 $</h3>
                            <h3 className="cart__item-count">100</h3>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>100</h2>
                    <button>Оплата</button>
                </div>
            </div>
        </div>
    )

}

export default Cart;