import React from "react";
import { Danish } from "../../data";

function Product() {
    return (
     <div className="product-container">
        
        <h2 className="menu-heading">Products for you</h2>
        {/* <div className="danish-wrapper"> */}
        <div className="product-wrapper">
      {Danish.map((oneItem) => {
        return (
            <div className="croissant" key={oneItem.id}>
        <div className="first-product-wrapper">
        <div className="danish-container">
         <img className="danish" src={oneItem.img} alt="croissant" />
        </div>
        <div>
            <h4 style={{marginBottom: "20px"}}> {oneItem.title}</h4>
            <p> {oneItem.ingredient}</p>
            <h4 style={{marginTop: "19px"}}> {oneItem.price} </h4>
           
        </div>
        
        
        </div>
        <hr />
        </div>
        )

      })}
        
        
        </div>
        
     </div>
    )
}


export default Product;