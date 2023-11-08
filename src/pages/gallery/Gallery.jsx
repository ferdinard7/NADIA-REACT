import React from "react";
import Bonus from "../../components/bonus/Bonus";
import Navbar2 from "../../components/navbar2/Navbar2";
import Footer from "../../components/footer/Footer";

function Gallery() {
    return (
   <div>
    <Bonus />
    <Navbar2 />
    <div className="gallery-page-container">
     <div className="first-gallery-page">
     <img src="/images/21.jpg" alt="ice-cream-cake" />
     </div>
     <div className="second-gallery-page">
    <img src="/images/22.jpg" alt="chips" />
    <img src="/images/23.jpg" alt="ice-cream" />
    <img src="/images/25.png" alt="flower-cream" />
    <img src="/images/27.png" alt="juice" />
     </div>
    </div>

    <Footer />
   </div>
    )
}


export default Gallery;