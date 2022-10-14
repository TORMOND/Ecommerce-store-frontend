import '../index.css';
// import { useState, useRef } from "react";

const PopUps = ({togglePopup}) => {

    return ( 
        <div id="popups">
             <div>
     
    
    </div>
<div id="categories">
<button onClick={togglePopup}> 
        Toggle with setState
      </button>
            <ul className='category-list'>
                <li>Mobile</li>
                <li>Desktops</li>
                <li>Monitors</li>
                <li>Computers</li>
                <li>Gaming</li>
                <li>Accesories</li>
                <li>Software</li>
                <li>Other Products & Services</li>
            </ul>

        </div>

        <div id="brands">

        </div>
        <div id="contact">
            
        </div>

        </div>
     );
}
 
export default PopUps;