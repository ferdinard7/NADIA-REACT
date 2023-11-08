import React from "react";
import  Badge  from "@mui/material/Badge"
import { Search, ShoppingCartOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton";

function Navbar2() {

    const quantity = useSelector(state=>state.cart.quantity);

    console.log(quantity);

    return (
        <div className="navbar2-container">
        <div className="navbar2-wrapper">
         <div className="left">
         <img  className="logo" src="/images/nadia.png" alt="nadia" />
         </div>
         <div className="right">
          <div className="menu-item"><Link to="/" className="nav2-link" >Home</Link></div>
          <div className="menu-item active"><Link to="/products/all" className="nav2-link">Shop</Link></div>
          <div className="menu-item"><Link to="/gallery" className="nav2-link">Gallery</Link></div>
          <div className="menu-item"><Link to="/" className="nav2-link">About</Link></div>
          <div className="menu-item"><Link to="/" className="nav2-link">Contact</Link></div>
          
          <div className="menu-item"> <Search /> </div>
          <div className="menu-item">
          <Link to="/cart">
          <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartOutlined color="action" />
            </Badge>
            </Link>
            </div>
            <div className="menu-item"><Link to="/register"> <AccountCircleOutlined /> </Link> </div>
         </div>
        </div>
        </div>

    )
}


export default Navbar2;