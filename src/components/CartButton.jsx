import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge"
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useSelector } from "react-redux";


const CartButton = () => {

    const quantity = useSelector(state=>state.cart.quantity);

    console.log(quantity);

    return (
   <div className="cart-button">
    <button>Go to cart 
    <Link to="/cart">
            <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined color="action" />
            </Badge>
            </Link>
    </button>
   </div>
    )
}


export default CartButton;