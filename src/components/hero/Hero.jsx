import React from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="hero-container">
          <div className="hero-wrapper">
          <div className="bread-wrapper"
          >
          <motion.h4
           className="bread-heading"
           initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 20 }}
          >BREAD HOUSE</motion.h4>
          <motion.p className="bread-paragraph"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 20 }}
          > <StarOutlineIcon  className="star-icon" />  <StarOutlineIcon className="star-icon" />  <StarOutlineIcon className="star-icon" /> </motion.p>
          <motion.h2 
          className="welcome-heading"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 10 }}
          >WELCOME TO NADIA BAKERY</motion.h2>


          </div>


          </div>
        </div>

    )
}


export default Hero;