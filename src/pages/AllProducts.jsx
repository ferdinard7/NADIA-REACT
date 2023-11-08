import React from "react";
import Bonus from "../components/bonus/Bonus";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import ShopItems from "../components/shop/ShopItems";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

function AllProducts() {
    const location = useLocation();
    console.log(location.pathname.split("/")[2]);

    const [ cookies, setCookie, removeCookie] = useCookies(null);


    console.log(cookies);
    return (
        <div>
            <Bonus />
            <Navbar2 />
            <ShopItems />
            <Footer />
        </div>

    )
}

export default AllProducts;