// import '../Assets/index.css';
import {  useRef } from "react";

const Brands = ({togglePopup}) => {
    const categories = useRef();

    return ( 
        <div id="popups">
             <div>
    </div>
<div id="brands" >
    <div className="close-section">
        <button onClick={togglePopup}  className='close-popup'>  X </button>
    </div>

            <ul className='category-list' ref={categories}>
                <li>iPhones</li>
                <li>Samsung</li>
                <li>Tecno</li>
                <li>Google Pixel</li>
                <li>Oppo</li>
                <li>Huawei</li>
            </ul>

        </div>

     
        </div>
     );
}
 
export default Brands;