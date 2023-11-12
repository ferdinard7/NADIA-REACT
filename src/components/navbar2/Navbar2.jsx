import React, { useRef } from "react";
import  Badge  from "@mui/material/Badge"
import { ShoppingCartOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar2() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const quantity = useSelector(state=>state.cart.quantity);

    console.log(quantity);

    return (
        <div>
        <header className="header">
        <h3><img src="/images/nadia.png" alt="nadia" /></h3>
        <nav ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="/products/all">Shop</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/">About</Link>
            {/* <Link to="/">Contact</Link> */}
            <ContactButton />
            <Link to="/cart">
            <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined color="action" />
            </Badge>
            </Link>
            <Link to="/register"><AccountCircleOutlined /></Link>

            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
        </button>
        </header>
       
        </div>
    )
}


export default Navbar2;