import '../index.css';
import NavBar from '../Components/NavBar';
import Products from '../Components/Products';
import Footer from '../Components/footer';
import Carousel from '../Components/Carousel';

import {useNavigate} from 'react-router-dom';
import PopUps from '../Components/popups';
import React, { useState, useRef } from 'react';

const Home = () => {     
   const navigate = useNavigate()

  const [userBar, setUserBar] = useState(false)
  const {popups, setPopups} = useState(true)
  const popup = useRef()
  const userProfileBar =useRef(null)

const signInUser =()=>{
  navigate('/LoginPage')
}
const userProfile = () =>{
  setUserBar(!userBar)
}

const togglePopup =()=>{
setShow(!show);
}
const [show, setShow] = useState(false);
const ref = useRef(null);
    return ( 
        <div className="Home">

   { show && <PopUps ref={ref} id={popups ? "popups" : "modal"} togglePopup={togglePopup} />}

<NavBar signInUser={signInUser}  categories={togglePopup} userProfile={userProfile} />
{userBar && <div className="user-profile-bar" ref={userProfileBar}>
  <p></p>
  <p>PROFILE</p>
  <p>LOG OUT</p>
</div>
}
{/* <Carousel /> */}
<Products />
<Footer />
        </div>
     );
}

export default Home;