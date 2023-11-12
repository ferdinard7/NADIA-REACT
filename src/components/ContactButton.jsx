import React from "react";
import { Link } from "react-scroll";

function ContactButton() {
    return (
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
    )
}

export default ContactButton;