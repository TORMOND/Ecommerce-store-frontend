import { useState } from 'react';
// FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';


const Carousel = ({searchProduct}) => {
    const {search, setSearch} = useState('')

    return ( 
        <div className="carousel">
            <img src="high-gaming-pc.jpg" alt="" className="carousel-image"/>
            <div className="input-section">
         <input
          type="text" 
         placeholder='search Product'
         value={search}
         onChange={e=> setSearch(e.target.value)}
          />
          <button onClick={searchProduct} className="search-btn">
            
          </button>
      </div>
        </div>
     );
}
 
export default Carousel;