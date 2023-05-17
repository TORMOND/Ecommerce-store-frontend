// import '../Assets/index.css';
import {  useRef } from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMobile, faDesktop, faGamepad,faComputer,  faTv } from '@fortawesome/free-solid-svg-icons';

// import { faUser } from '@fortawesome/free-regular-svg-icons';


const PopUps = ({togglePopup}) => {
    const categories = useRef();

    return ( 
        <div id="popups">
             <div>
     
    
    </div>
<div id="categories" >
    <div className="close-section">
     <button onClick={togglePopup} className='close-popup'> X</button>   
    </div>

            <ul className='category-list' ref={categories}>
                <li>
                <FontAwesomeIcon icon={faMobile} />
                   <p>Mobile</p></li>
                <li>
                <FontAwesomeIcon icon={faDesktop} />
                <p>  Desktops</p>
                  </li>
                <li><FontAwesomeIcon icon={faTv} />
                <p>Monitors</p>
                </li>
                <li><FontAwesomeIcon icon={faComputer} />
                <p> Computers</p>
               </li>
                <li><FontAwesomeIcon icon={faGamepad} />
                <p>Gaming</p>
                </li>
                <li>Accesories</li>
                {/* <li><FontAwesomeIcon icon={faUncharted} />Software</li>
                <li><FontAwesomeIcon icon={faUncharted} />Other Products & Services</li> */}
            </ul>

        </div>


        </div>
     );
}
 
export default PopUps;