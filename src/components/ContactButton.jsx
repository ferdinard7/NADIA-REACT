import React from "react";
import { Link } from "react-scroll";

function ContactButton() {
    return (
        <div className="navbar-menu-item"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></div>
    )
}

export default ContactButton;