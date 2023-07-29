import { useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import {useLogout} from '../Hooks/useLogout';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCaretDown, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const NavBar = ({ categories, userProfile, handleBrands, handleContacts, handleOffers, search, setSearch, toggleSearch}) => {
  const [items] = useState(JSON.parse(localStorage.getItem('items')) || []);

  const navigate = useNavigate();
  const {user} = useAuthContext();
  const cart = useContext(CartContext);
  const logout = useLogout()

const  cartValue =useRef();
const cartPage =()=>{
  if(items.length > 0){
    navigate('/cart');
  }else{
    alert('Cart is Empty');
  }
  
}

const signInUser =()=>{
  navigate('/LoginPage')
}
const handleLogout =()=>{
  logout()
}
const searchProduct =() =>{
 
}

    return (
   <div className="flex flex-col bg-gray-900  w-full box-border top-0 fixed z-20 mb-10">
  
     <div className="flex items-center justify-between bg-black w-full text-gray-50 py-2 px-4  box-border">
      <h2 className='text-lg'>BESK MERCHANTS</h2>
  
  
      <div className="flex gap-5 items-center">
      <div className="">
          <button onClick={toggleSearch} className="border-0 py-1 px-5 text-gray-50 cursor-pointer " ><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></button>
      </div>
          <div className="relative cursor-pointer" onClick={cartPage}>
          <FontAwesomeIcon icon={faCartShopping}  className="text-xl my-0 mx-1.5" />
          <span  className="hidden lg:inline-block">Cart</span>
          <div className="text-purple-500 font-bold rounded-full absolute z-1 -mt-8 ml-3 ">
        <h6 ref={cartValue}>{cart.getNumberOfProducts()}</h6>
        </div>
          </div>
          {
            !user &&
             <div className="cursor-pointer p-1 duration-75 hover:text-purple-200 outline-1 outline-purple-500" onClick={signInUser}>
          <FontAwesomeIcon icon={faUser} className='my-0 mx-1.5' />
            <span className="hidden lg:inline-block">Sign in</span>
          </div>
          }
         
          {user &&
          <div className="flex gap-2.5 px-4 py-2 items-center">
           <div className="cursor-pointer p-1 duration-75 hover:text-purple-500 outline-1 outline-purple-500" >
          <FontAwesomeIcon icon={faUser} className='my-0 mx-1.5' />
            <span>{user.firstName}</span>
            <FontAwesomeIcon icon={faCaretDown}  className='my-0 mx-1.5' onClick={userProfile}   />
         
          </div>

          <div className="flex gap-2 cursor-pointer text-white" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightToBracket} size="lg" />
            <p className="text-sm">Logout</p>
          </div>

          </div>
          }
         

      </div>
     </div>

     </div>
       
      );
}

export default NavBar;