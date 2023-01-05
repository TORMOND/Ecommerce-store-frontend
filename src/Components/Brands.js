import '../index.css';
import { useState, useRef } from "react";

const Brands = ({togglePopup}) => {
    const categories = useRef();

    return ( 
        <div id="popups">
             <div>
     
    
    </div>
<div id="brands" >
<button onClick={togglePopup}> 
        Toggle with setState
      </button>
            <ul className='category-list' ref={categories}>
                <li>iPhones</li>
                <li>Samsung</li>
                <li>Tecno</li>
                <li>Google Pixel</li>
                <li>Oppo</li>
                <li>Huawei</li>
            </ul>

        </div>

        <div id="brands">

        </div>
        <div id="contact">
            
        </div>

        </div>
     );
}
 
export default Brands;