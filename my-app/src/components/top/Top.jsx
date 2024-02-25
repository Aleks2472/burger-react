import React from "react";
import './top.scss';
import Header from "../header/Header";
import { MyContext } from "../../MyContext";
import { languageArray } from "../../array/Language";

function Top() {

    const {language} = React.useContext(MyContext);
    const englishTranslations = languageArray.find(lang => lang.en);

    return (
        <div className="top">
            <div className="container top__container">
                <Header></Header>
                <div className="top__content">
                    <div className="top__info">
                        <span>{englishTranslations[language].newMenu}</span>
                        <h1>{englishTranslations[language].myBurger}</h1>
                        <h2>{englishTranslations[language].myBurgerText}</h2>
                        <button className="button">{englishTranslations[language].myBurgerButton}</button>
                    </div>
                    <img className="top__my-burger" src="img/top/main_burger.png" alt="" />
                </div>
            </div>
        </div>
    )

}

export default Top