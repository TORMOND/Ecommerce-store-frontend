import { useNavigate } from 'react-router-dom';
import  { useState, useRef } from 'react';
import { useLogout } from '../Hooks/useLogout';


import { NavBar, Products, Footer, PopUps, Brands, HeroSection, Categories, Carousel }from '../components';
import Modal from '../components/Modal';

const Home = () => {     

  const navigate = useNavigate()

  const [userBar, setUserBar] = useState(false)
  const userProfileBar =useRef(null)
  const { logout } = useLogout()
  const [show, setShow] = useState(false);
  const [brands, setBrands] = useState(false);
  const [contacts, setContacts] = useState(false);
  const ref = useRef(null);
  const brands_ref = useRef(null)


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
const [isModal, setIsModal ] = useState(false);
  const toggleSearch =()=>{
    setIsModal(!isModal)
  }


const [search, setSearch] = useState('')

    return ( 
        <div className="relative bg-gray-300">

   { show && <div id='w-full bg-[rgba(0,0,0,0.5)] fixed z-10 overflow-auto h-full flex' ref={ref}>
   
   <PopUps ref={ref}  togglePopup={togglePopup} />

    </div>}
    { brands && <div id='popups' ref={ref}>
 
   <Brands ref={brands_ref} togglePopup={togglePopup}  />

    </div>}


    {isModal &&
         <Modal 
         toggleSearch={toggleSearch}
         />
      }

<NavBar
 signInUser={signInUser}  categories={handleCategories}
 userProfile={userProfile} handleBrands={handleBrands}
 handleContacts={handleContacts} handleOffers={handleOffers} 
 search={search} setSearch={setSearch}
 toggleSearch={toggleSearch}
 />
{userBar && <div className="user-profile-bar" ref={userProfileBar}>
  <p></p>
  <p className='checkProfile'>PROFILE</p>
  <p className='logout' onClick={handleLogout}>LOG OUT</p>
</div>
}

<HeroSection />
{/* 

<Carousel />
 */}

<div className='grid grid-cols-2 md:grid-cols-4 gap-2.5 bg-white p-4'>
<div className='text-align p-2 border-r border-r-gray-400'>
  <h3>Original Products</h3>
  <p className=''>We offer products of the best quality </p>
  <p className=''>Reach out to us for personal or customized requests</p>
</div>
<div className='text-align  p-2 border-r border-r-gray-400'>
  <h3>Dedicated to our customers</h3>
  <p className=''>We arre dedicated to serving our customer needs</p>
  <p className=''>Reach out to us for personal or customized requests</p>
</div>
<div className='text-align  p-2 border-r border-r-gray-400'>
  <h3>Want an unvailable Product contact us</h3>
  <p className=''>Contact Us & we'll find your product & notify you</p>

</div>
<div className='text-align p-2 '>
  <h3>Fast & Worldwide Shipment</h3>
  <p className=''>We deliver the products to your location anywhere in the world</p>
</div>
</div>

<Categories />
<Products />

<Footer
 generateForm={handleContacts}
 
 />
        </div>
     );
}

export default Home;