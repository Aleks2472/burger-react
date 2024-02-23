import React from "react";
import './burgers.scss';
import { burgersArray } from "../../array/Array-burgers";
import { MyContext } from "../../MyContext";

function Burgers() {

    const { arrayCart,
        setArrayCart } = React.useContext(MyContext)

    const addCart = (item) => {
        const existingCartItemIndex = arrayCart.findIndex(cartItem => cartItem.id === item.id);

        if (existingCartItemIndex !== -1) {
            const updatedCart = [...arrayCart];
            updatedCart[existingCartItemIndex].count += 1;
            setArrayCart(updatedCart);
        } else {
            const addData = {
                id: item.id,
                title: item.title,
                text: item.text,
                price: item.price,
                gram: item.grm,
                img: item.img,
                count: 1
            };

            setArrayCart(prevData => [...prevData, addData]);
        }
    }

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
    
        setArrayCart(updatedCart);
    };

    return (
        <div className="burgers">
            <div className="container">
                <h2 className="title">ВЫБЕРИТЕ СВОЙ БУРГЕР</h2>
                <div className="burgers__content">
                    {burgersArray.map((item, index) => (
                        <div className="burgers__item" key={index}>
                            <img className="burgers__img" src={item.img} alt="" />
                            <h2 className="burgers__title">{item.title}</h2>
                            <h3 className="burgers__text">{item.text}</h3>
                            <div className="burgers__functional">
                                <div className="burgers__price">
                                    <h2>{item.price} $</h2>
                                    <h3>{item.grm}</h3>
                                </div>
                                {
                                    arrayCart.some(cartItem => cartItem.id === item.id && cartItem.count > 0) ?
                                        (
                                            <div className="burgers__button-count">
                                                <button onClick={() => deleteCount(item)}>-</button>
                                                <span>{arrayCart.find(cartItem => cartItem.id === item.id)?.count || 0}</span>
                                                <button onClick={() => addCount(item)}>+</button>
                                            </div>
                                        ) :
                                        (
                                            <button onClick={() => addCart(item)} className="button burgers__button">
                                                Заказать <img src="img/icon/cart.svg" alt="" />
                                            </button>
                                        )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Burgers