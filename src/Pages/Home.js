import '../Assets/index.css';

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useLogout } from '../Hooks/useLogout';


import NavBar from '../Components/NavBar';
import Products from '../Components/Products';
import Footer from '../Components/footer';
import PopUps from '../Components/popups';
import Brands from '../Components/Brands';
import Contacts from '../Components/Contacts';


const Home = () => {     
   const navigate = useNavigate()

  const [userBar, setUserBar] = useState(false)
  const {popups, setPopups} = useState(true)
  // const popup = useRef()
  const userProfileBar =useRef(null)
  const { logout } = useLogout()
  const [show, setShow] = useState(false);
  const [brands, setBrands] = useState(false);
  const [contacts, setContacts] = useState(false);
  const ref = useRef(null);
  const brands_ref = useRef(null)
  const contacts_ref = useRef(null)

const signInUser =()=>{
  navigate('/LoginPage')
}
const handleLogout =()=>{
  logout()
}
const userProfile = () =>{
  setUserBar(!userBar)
}
const handleCategories =()=>{
  setShow(!show)
}
const togglePopup =()=>{
setShow(null);
setBrands(null)
setContacts(null)
}

const handleBrands =()=>{
  setBrands(!brands);
}
const handleOffers=()=>{
  setShow(!show);
}
const handleContacts=()=>{
  setContacts(!contacts);
}
const cartPage =()=>{
  navigate('/cart')
}
    return ( 
        <div className="Home">

   { show && <div id='popups' ref={ref}>
   
   <PopUps ref={ref}  togglePopup={togglePopup} />

    </div>}
    { brands && <div id='popups' ref={ref}>
 
   <Brands ref={brands_ref} togglePopup={togglePopup}  />

    </div>}
    { contacts && <div id='popups' ref={ref}>

   <Contacts ref={contacts_ref} togglePopup={togglePopup}  />

    </div>}



<NavBar signInUser={signInUser}  categories={handleCategories} userProfile={userProfile} handleBrands={handleBrands} handleContacts={handleContacts} handleOffers={handleOffers} cartPage={cartPage} />
{userBar && <div className="user-profile-bar" ref={userProfileBar}>
  <p></p>
  <p className='checkProfile'>PROFILE</p>
  <p className='logout' onClick={handleLogout}>LOG OUT</p>
</div>
}

<Products />

<Footer />
        </div>
     );
}

export default Home;