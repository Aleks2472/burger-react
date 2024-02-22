import React from "react";
import './order.scss';

function Order() {

    return (
        <div className="order">
            <div className="container order__container">
                <h2 className="title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
                <img className="order__img" src="img/order/order-img.png" alt="" />
                <div className="order__form">
                    <h2>Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа</h2>
                    <div className="order__input">
                        <input placeholder="Ваш заказ" type="text" />
                    </div>
                    <div className="order__input">
                        <input placeholder="Ваше имя" type="text" />
                    </div>
                    <div className="order__input">
                        <input placeholder="Ваш телефон" type="text" />
                    </div>
                    <button className="button order__submit">Оформить заказ</button>
                </div>
            </div>
        </div>
    )

}

export default Order;