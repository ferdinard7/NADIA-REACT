import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Bonus() {
    return (
   <div className="bonus-container">
   <div className="bonus-wrapper">
   <marquee 
    behavior="scroll" direction="left" scrollamount="1"
   > <LocationOnIcon className="location" /> Ugbowo 300103, Benin city, Edo, Nigeria </marquee> 
    </div>

   </div>
    )
}

export default Bonus;