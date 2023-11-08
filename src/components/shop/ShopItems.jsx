import React, { useState } from "react";
import Right from "../right/Right";

  
  

function ShopItems() {

  const [filter, setFilter] = useState("");


  const handleFilter = (e) => {
      const value = e.target.value;
      setFilter(value);
  }

  
    return (

    <div className="shop-container">
        <div className="shop-wrapper">
        <div className="shop-left">
    <div className="shop-left-div">
    <span className="filter-text">
            Filter Food items:
         </span>
         <select className="select" name="food" onChange={handleFilter}>
            <option disabled>
             All
            </option>
            <option>
                bread
            </option>
            <option>
                cake
            </option>
            <option>
                grills
            </option>
            <option>
              ice-cream
            </option>
            <option>
                meal
            </option>
            <option>
                snack
            </option>
         </select>
    </div>
     
    </div>
       <Right filter={filter} />
        </div>
    </div>
    )
}


export default ShopItems;