import '../index.css';
import NavBar from '../Components/NavBar';
import Products from '../Components/Products';
import Footer from '../Components/footer';
import Carousel from '../Components/Carousel';

import {useNavigate} from 'react-router-dom';
import PopUps from '../Components/popups';
import React, { useState, useRef } from 'react';

const Home = () => {     
  const {popups, setPopups} = useState(true)
  const popup = useRef()
  const navigate = useNavigate()

const signInUser =()=>{
  navigate('/LoginPage')
}
const categories=()=>{
 setPopups(false)
}
    
    return ( 
        <div className="Home">

          {<PopUps  id={popups ? "popups" : "modal"} />}

<NavBar signInUser={signInUser}  categories={()=> setPopups(false)} />

{/* <Carousel /> */}
<Products />
<Footer />
        </div>
     );
}

export default Home;