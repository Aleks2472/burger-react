import React from "react";
import './why.scss';
import { whyArray } from "../../array/Array-why";

function Why() {

    return (
        <div className="why">
            <div className="container">
                <h2 className="title">
                    ПОЧЕМУ НАС ВЫБИРАЮТ?
                </h2>
                <ul className="why__content">
                    {whyArray.map((item, index) => (
                        <li key={index}>
                            <img src={item.img} alt="" />
                            <h2>{item.title}</h2>
                            <h3>{item.text}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default Why;