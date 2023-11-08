import React from "react";
import Bonus from "../components/bonus/Bonus";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Choose from "../components/choose/Choose";
import Chef from "../components/chef/Chef";
import Menu from "../components/menu/Menu";
// import Product from "../components/product/Product";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

function Home() {
    return (
        <div className="home-container">
          <Bonus />
          <Navbar />
          <Hero />
          <Choose />
          <Chef />
          <Menu />
          {/* <Product /> */}
          <Gallery />
          <Footer />
        </div>
    )
}


export default Home;