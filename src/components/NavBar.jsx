import { useRef, useState, useEffect } from 'react';
// import '../Assets/index.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';


const NavBar = ({signInUser, categories, userProfile, handleBrands, handleContacts, handleOffers, search, setSearch}) => {
  const [items] = useState(JSON.parse(localStorage.getItem('items')) || []);

  const navigate = useNavigate()
  const {user} = useAuthContext()

 const [carts , setCart] = useState(0)
  // items ??  const [carts , setCart] = useState( 0) : const [carts , setCart] = useState(items.length)

  useEffect(()=>{
   items ? setCart(0) : setCart(items.length)

  }, [])
//  const {search, setSearch} = useState('')

const  cartValue =useRef()
const cartPage =()=>{
  if(items.length > 0){
    navigate('/cart')
  }else{
    alert('Cart is Empty')
  }
  
}

const searchProduct =() =>{
 
}
// const handleSearch = products.filter(product=>   
//   Object.values(product).join('').toLowerCase().trim().includes(searchCustomerDetails)
//   )
  
// const productsToDisplay = setSearch ? handleSearch : products;  


    return (
   <div className="flex flex-col bg-gray-900  w-full box-border sticky top-0">
    <div className="hidden">
      <div className="flex bg-black text-gray-50 py-2 px-4 flex-col">
<div className="flex items-center content-between bg-black py-2 px-4 w-full box-border">
   <h2>STORE</h2> 
   <div className="relative">
          <FontAwesomeIcon icon={faCartShopping}  className="text-sm my-0 mx-2" />
          <div className="bg-purple-500 text-gray-50 max-w-max max-h-max rounded-full absolute z-10 mt-[1] ml-1/5 flex content-center items-center cursor-pointer">
        <h6 ref={cartValue}>{carts}</h6>
        </div>
          </div>

          {
            !user &&
             <div className="cursor-pointer p-1 duration-75 hover:text-purple-500 outline-1 outline-purple-500" onClick={signInUser}>
          <FontAwesomeIcon icon={faUser} className='my-0 mx-1.5' />
            <span>Sign in</span>
          </div>
          }
         
          {user &&
           <div className="cursor-pointer p-1 duration-75 hover:text-purple-500 outline-1 outline-purple-500" >
          <FontAwesomeIcon icon={faUser} className='my-0 mx-1.5' />
            <span>Victor</span>
            <FontAwesomeIcon icon={faCaretDown}  className='my-0 mx-1.5' onClick={userProfile}   />
       
          </div>
          }
         
   <div className="side-menu">
      <FontAwesomeIcon icon={faBars} />
      </div>

</div>  
     <div className="flex">
     <div >
         <input
          type="text" 
         placeholder='search Product'
         value={search}
         onChange={e=> setSearch(e.target.value)}
         className="w-2/5 border-0 p-2 focus:outline-0"
        //  style={{border-radius: 5px 0 0  5px}}
          />
         
      </div> 
         

      </div>
      <div className="bg-gray-900 text-gray-50 py-1.5 px-2.5 ">
       
      </div>
      </div>
    </div>

     <div className="flex items-center justify-between bg-black w-full text-gray-50 py-2 px-4  box-border">
      <h2>STORE</h2>
      <div className="w-3/5">
         <input
          type="text" 
         placeholder='search Product'
         value={search}
         onChange={e=> setSearch(e.target.value)}
         className="w-4/5 border-0 p-2 focus:outline-0 text-gray-700"
        //  style={{border-radius: 5px 0 0  5px}}
          />
          <button onClick={searchProduct} className="border-0 py-2.5 px-5 bg-purple-500 text-gray-50 cursor-pointer " >SEARCH</button>
      </div>
  
      <div className="flex gap-5">
          <div className="relative" onClick={cartPage}>
          <FontAwesomeIcon icon={faCartShopping}  className="text-xl my-0 mx-1.5" />
          <span>Cart</span>
          <div className="text-purple-500 font-bold rounded-full absolute z-1 -mt-8 ml-3 ">
        <h6 ref={cartValue}>{carts}</h6>
        </div>
          </div>
          {
            !user &&
             <div className="cursor-pointer p-1 duration-75 hover:text-purple-500 outline-1 outline-purple-500" onClick={signInUser}>
          <FontAwesomeIcon icon={faUser} className='my-0 mx-1.5' />
            <span>Sign in</span>
          </div>
          }
         
          {user &&
           <div className="cursor-pointer p-1 duration-75 hover:text-purple-500 outline-1 outline-purple-500" >
          <FontAwesomeIcon icon={faUser} className='my-0 mx-1.5' />
            <span>Victor</span>
            <FontAwesomeIcon icon={faCaretDown}  className='my-0 mx-1.5' onClick={userProfile}   />
       
          </div>
          }
         

      </div>
     </div>
     <div className="bg-gray-900 text-gray-50 py-1.5 px-2.5">
      <ul className='flex gap-2.5'>
         <li className='flex gap-2 items-center bg-purple-500 p-1.5 list-none cursor-pointer' onClick={categories}>
          <FontAwesomeIcon icon={faBars} />
          <p>All Categories</p>
          </li>
         <li className='p-1.5' onClick={handleBrands}>Brands</li>
         <li className='p-1.5' onClick={handleContacts}>Contact Us</li>
         <li className='p-1.5' onClick={handleOffers}>Offers</li>
      </ul>
     </div>
     </div>
       
      );
}

export default NavBar;