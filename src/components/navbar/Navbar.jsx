import React from "react";
import  Badge  from "@mui/material/Badge"
import { Search, ShoppingCartOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { Link  } from "react-router-dom";
import ContactButton from "../ContactButton";
import { useSelector } from "react-redux";

function Navbar() {

    const quantity = useSelector(state=>state.cart.quantity);

    console.log(quantity);
    return (
        <div className="navbar-container">
        <div className="navbar-wrapper">
         <div className="left">
         <img  className="logo" src="/images/nadia.png" alt="nadia" />
         </div>
         <div className="right">
          <div className="navbar-menu-item navbar-active"><Link  className="nav-link" to="/">Home</Link></div>
          <div className="navbar-menu-item"><Link className="nav-link" to="/products/all">Shop</Link></div>
          <div className="navbar-menu-item"><Link className="nav-link" to="/gallery">Gallery</Link></div>
          <div className="navbar-menu-item"><Link className="nav-link" to="/">About</Link></div>
           <ContactButton />
          <div className="navbar-menu-item"> <Search /> </div>
          <div className="navbar-menu-item">
          <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartOutlined color="action" />
            </Badge>
            </div>
            <div className="navbar-menu-item"><Link className="nav-link" to="/register"> <AccountCircleOutlined /></Link>  </div>
         </div>
        </div>
        </div>

    )
}


export default Navbar;