import React from "react";
import './top.scss';
import Header from "../header/Header";

function Top() {

    return (
        <div className="top">
            <div className="container top__container">
                <Header></Header>
                <div className="top__content">
                    <div className="top__info">
                        <span>Новое меню</span>
                        <h1>БУРГЕР ЧЕДДЕР</h1>
                        <h2>Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.</h2>
                        <button className="button">Смотреть меню</button>
                    </div>
                    <img className="top__my-burger" src="img/top/main_burger.png" alt="" />
                </div>
            </div>
        </div>
    )

}

export default Top