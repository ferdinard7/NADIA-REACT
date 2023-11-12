import React from "react";
import Bonus from "../components/bonus/Bonus";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import ShopItems from "../components/shop/ShopItems";
import CartButton from "../components/CartButton";

function AllProducts() {
    return (
        <div>
            <Bonus />
            <Navbar2 />
            <CartButton />
            <ShopItems />
            <Footer />
        </div>

    )
}

export default AllProducts;