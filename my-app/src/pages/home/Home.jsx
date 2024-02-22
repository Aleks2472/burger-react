import React from "react";
import './home.scss'
import Top from "../../components/top/Top";
import Why from "../../components/why/Why";
import Burgers from "../../components/burgers/Burgers";
import Order from "../../components/order/Order";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";

function Home() {

    return (
        <div className="home">
            <Cart></Cart>
            <Top></Top>
            <Why></Why>
            <Burgers></Burgers>
            <Order></Order>
            <Footer></Footer>
        </div>
    )

}

export default Home;