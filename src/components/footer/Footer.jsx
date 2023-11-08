import React from "react";
import { Instagram, Facebook, Twitter } from '@mui/icons-material';


function Footer() {

    return (
        <div className="footer-container contact">
           <div className="footer-wrapper">
             <div className="footer-logo">
                <img className="footer-img" src="/images/nadia.png" alt="logo" />
             </div>
             <div className="footer-first">
                <h4 style={{marginBottom: "15px"}}>Contact</h4>
                <p style={{marginBottom: "15px"}}> <span className="footer-span">Address:</span>  Ugbowo 300103, Benin city, Edo, Nigeria</p>
                <p style={{marginBottom: "15px"}}> <span className="footer-span"> Tel: </span> 09156218746</p>
                <p style={{marginBottom: "25px"}}> <span className="footer-span">Email: </span> nadiabakery@gmail.com</p>
             </div>
             <div className="footer-second">
             <h4 style={{marginBottom: "15px"}}>Links of Interest</h4>
                <p style={{marginBottom: "15px"}}>  About Us </p>
                <p style={{marginBottom: "15px"}}>  FAQ</p>
                 </div>
             <div className="footer-third">
             <h4 style={{marginBottom: "15px"}}>Follow Us</h4>
                <p style={{marginBottom: "15px"}}>  Instagram <Instagram   style={{fontSize: "16px"}}/> </p>
                <p style={{marginBottom: "15px"}}>  Twitter <Twitter  style={{fontSize: "16px"}}/> </p>
                <p style={{marginBottom: "25px"}}>  Facebook <Facebook style={{fontSize: "16px"}}/> </p>
             </div>
           </div>

           <footer>
            <p>Made with 💖 by Big_Ferd & Koffi</p>
            <small> copyright © 2023</small>
           </footer>
        </div>
    )
}


export default Footer;