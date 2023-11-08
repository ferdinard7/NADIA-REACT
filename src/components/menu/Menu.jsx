import React from "react";
import Data from "../../data";

function Menu() {
    return (
        <div className="menu-container">
        <div className="menu-wrapper">
        <div className="the-menu">
        <h2 className="menu-heading">The Menu</h2>
         <div className="main-menu">
            <div className="main-menu-item">Bread</div>
            <div className="main-menu-item">Cake</div>
            <div className="main-menu-item">Grills</div>
            <div className="main-menu-item">Ice Cream</div>
            <div className="main-menu-item">Meals</div>
            <div className="main-menu-item">Snacks</div>
         </div>
         <div className="bread-menu">
       {Data.map((oneItem) => {
        return (
            <div className="bread" key={oneItem.id}>
         <img src={oneItem.img} alt="frist-bread" />
         <h3 className="bread-title">{oneItem.title}</h3>
         <h3 className="bread-price"> {oneItem.price}</h3>


         </div>
        )
       })}
        
        </div>
        
        </div>
        </div>
        </div>
    )
}


export default Menu;