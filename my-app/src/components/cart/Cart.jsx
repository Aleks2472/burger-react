import React from "react";
import './cart.scss';
import { MyContext } from "../../MyContext";

function Cart() {

    const { arrayCart, setArrayCart, modalActive, setModalActive } = React.useContext(MyContext)

    const calculateTotal = () => {
        return arrayCart.reduce((total, item) => {
            return total + item.count * item.price;
        }, 0);
    };

    const addCount = (item) => {
        const updatedCart = arrayCart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );

        setArrayCart(updatedCart);
    };

    const deleteCount = (item) => {
        const updatedCart = arrayCart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
        );

        if (item.count === 1) {
            const updatedCart = arrayCart.filter(cartItem => cartItem.id !== item.id);
            setArrayCart(updatedCart);
        } else {
            setArrayCart(updatedCart);
        }
    };

    const removeItem = (item) => {
        const updatedCart = arrayCart.filter(cartItem => cartItem.id !== item.id);
        setArrayCart(updatedCart);
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
                            <div className="cart__button__count">
                                <button onClick={() => deleteCount(item)}>-</button>
                                <h3 className="cart__item-count">{arrayCart.find(cartItem => cartItem.id === item.id)?.count || 0}</h3>
                                <button onClick={() => addCount(item)}>+</button>
                            </div>
                            <img onClick={() => removeItem(item)} className="cart__delete" src="img/icon/delete.png" alt="" />
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