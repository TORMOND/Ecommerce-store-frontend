import { useRef, useState } from 'react';
import '../index.css';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';


const NavBar = ({signInUser, categories, userProfile, handleBrands, handleContacts, handleOffers}) => {
const {search, setSearch} = useState('')
const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
const [cart , setCart] = useState(items.length)
const  cartValue =useRef()



const searchProduct =() =>{

}
    return (
   <div className="nav-bar">
    <div className="mobile-nav">
      <div className="menu-section">
<div className="top-section">
   <h2>STORE</h2> 
   <div className="cart">
          <FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />
          <div className="number">
        <h6 ref={cartValue}>{cart}</h6>
        </div>
          </div>
          <div className="User" onClick={signInUser}>
          <FontAwesomeIcon icon={faUser} className='userIcon' />
            <span>Sign in</span>
          </div>
          {/* <div className="User" >
          <FontAwesomeIcon icon={faUser} className='userIcon' />
            <span>Victor</span>
            <FontAwesomeIcon icon={faCaretDown}  className='userIcon' onClick={userProfile}   />
       
          </div> */}
   <div className="side-menu">
      <FontAwesomeIcon icon={faBars} />
      </div>

</div>  
     <div className="second-part">
     <div className="input-part">
         <input
          type="text" 
         placeholder='search Product'
         value={search}
         onChange={e=> setSearch(e.target.value)}
          />
         
      </div> 
         

      </div>
      <div className="bottom-section">
       
      </div>
      </div>
    </div>

     <div className="top-section">
      <h2>STORE</h2>
      <div className="input-part">
         <input
          type="text" 
         placeholder='search Product'
         value={search}
         onChange={e=> setSearch(e.target.value)}
          />
          <button onClick={searchProduct} className="search-btn">SEARCH</button>
      </div>
  
      <div className="second-part">
          <div className="cart">
          <FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />
          <span>Cart</span>
          <div className="number">
        <h6 ref={cartValue}>{cart}</h6>
        </div>
          </div>
          <div className="User" onClick={signInUser}>
          <FontAwesomeIcon icon={faUser} className='userIcon' />
            <span>Sign in</span>
          </div>
          <div className="User" >
          <FontAwesomeIcon icon={faUser} className='userIcon' />
            <span>Victor</span>
            <FontAwesomeIcon icon={faCaretDown}  className='userIcon' onClick={userProfile}   />
       
          </div>

      </div>
     </div>
     <div className="bottom-section">
      <ul className='nav-list'>
         <li className='categories' onClick={categories}>
          <FontAwesomeIcon icon={faBars} />
          <p>All Categories</p>
          </li>
         <li className='brands' onClick={handleBrands}>Brands</li>
         <li className='contacts' onClick={handleContacts}>Contact Us</li>
         <li className='sell'>Filter</li>
         <li className='offers' onClick={handleOffers}>Offers</li>
      </ul>
     </div>
     </div>
       
      );
}
 
export default NavBar;