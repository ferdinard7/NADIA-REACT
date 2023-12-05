import React from "react";
import {motion } from "framer-motion";

function Chef() {
    return (
   <div className="first-chef-container">
   <section class="chef-section">
    <div class="chef-container">
      <img className="chef-cap-img" src="./images/cap.png" alt="Chef Cap" class="chef-cap" />
      <motion.div 
      class="chef-icon icon-45"
      animate={{y: [-10, 0, 0, -10]}}
      transition={{repeat: Infinity, duration: 4}}
      >
      <i class="fa-solid fa-headset font-icon"></i>
      </motion.div>
       <div className="support1">
     <h4>Customer Support</h4>
      <p>very helpful support 24/7</p> 
      </div>
      <motion.div class="chef-icon icon-90"
       animate={{y: [-10, 0, 0, -10]}}
       transition={{repeat: Infinity, duration: 4}}
      >
      <i class="fa-solid fa-fan font-icon"></i>
      </motion.div>
       <div className="support2">
     <h4>100% Organic</h4>
      <p>Available quality foods</p> 
      </div>
      <motion.div class="chef-icon icon-135"
       animate={{y: [-10, 0, 0, -10]}}
       transition={{repeat: Infinity, duration: 4}}
      >
      <i class="fa-solid fa-coins font-icon"></i>
      </motion.div>
      <div className="support3" >
     <h4>Secure Payment</h4>
      <p>fast and easy payment</p> 
      </div>
       
    </div>
  </section>
  
   </div>
    )
}


export default Chef;