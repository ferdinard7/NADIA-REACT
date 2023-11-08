import React from "react";


function Chef() {
    return (
   <div className="first-chef-container">
   <section class="chef-section">
    <div class="chef-container">
      <img className="chef-cap-img" src="./images/cap.png" alt="Chef Cap" class="chef-cap" />
      <div class="chef-icon icon-45">
      <i class="fa-solid fa-headset font-icon"></i>
      </div>
       <div className="support1" >
     <h4>Customer Support</h4>
      <p>very helpful support 24/7</p> 
      </div>
      <div class="chef-icon icon-90">
      <i class="fa-solid fa-fan font-icon"></i>
      </div>
       <div className="support2">
     <h4>100% Organic</h4>
      <p>Available quality foods</p> 
      </div>
      <div class="chef-icon icon-135">
      <i class="fa-solid fa-coins font-icon"></i>
      </div>
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