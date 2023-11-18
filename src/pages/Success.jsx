import React from "react";
import { useLocation } from "react-router-dom";

function Success() {
    const location = useLocation();

    console.log(location);
    
    return (
   <div>
    successful, Thanks for shopping with Us
   </div>
    )
}


export default Success;