import '../index.css';

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useLogout } from '../Hooks/useLogout';


import NavBar from '../Components/NavBar';
import Products from '../Components/Products';
import Footer from '../Components/footer';
import PopUps from '../Components/popups';


const Home = () => {     
   const navigate = useNavigate()

  const [userBar, setUserBar] = useState(false)
  const {popups, setPopups} = useState(true)
  // const popup = useRef()
  const userProfileBar =useRef(null)
  const { logout } = useLogout()
  const [show, setShow] = useState(false);
  const ref = useRef(null);

const signInUser =()=>{
  navigate('/LoginPage')
}
const handleLogout =()=>{
  logout()
}
const userProfile = () =>{
  setUserBar(!userBar)
}
const togglePopup =()=>{
setShow(!show);
}
const handleBrands =()=>{
  setShow(!show);
}
const handleOffers=()=>{
  setShow(!show);
}
const handleContacts=()=>{
  setShow(!show);
}

    return ( 
        <div className="Home">

   { show && <div id='popups' ref={ref}>
   
   <PopUps ref={ref} id={popups ? "popups" : "modal"} togglePopup={togglePopup} />

    </div>}

<NavBar signInUser={signInUser}  categories={togglePopup} userProfile={userProfile} handleBrands={handleBrands} handleContacts={handleContacts} handleOffers={handleOffers} />
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