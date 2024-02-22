import React from "react";
import './burgers.scss';
import { burgersArray } from "../../array/Array-burgers";
import { MyContext } from "../../MyContext";

function Burgers() {

    const { setArrayCart } = React.useContext(MyContext)

    const addCart = (item) => {

        const addData = {
            id: item.id,
            title: item.title,
            text: item.text,
            price: item.price,
            gram: item.grm,
            img: item.img
        }

        setArrayCart(prevData => [...prevData, addData]);
    }

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
                                    <h2>{item.price}</h2>
                                    <h3>{item.grm}</h3>
                                </div>
                                <button onClick={() => addCart(item)} className="button burgers__button">Заказать <img src="img/icon/cart.svg" alt="" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Burgers