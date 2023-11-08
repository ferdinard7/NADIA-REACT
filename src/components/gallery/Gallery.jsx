import React from "react";
import {  galleryImages } from "../../data";


function Gallery() {
    return (
   <div className="gallery-container">
   <h2 className="gallery-heading">Our Gallery</h2>

   <section class="product-section">

    <div class="sliderr">

        <div class="slide-track">
            {galleryImages.map((oneItem) => {
                return (
                    <div class="slide" key={oneItem.id}>
                <img className="slide-img" src={oneItem.img} alt="gallery"/>
            </div>
                )
            })}
            
        </div>
    </div>

</section>

    

   </div>
    )
}


export default Gallery;