import { useNavigate } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";
import { useContext, useState, useEffect } from "react";
import { OrdersContext } from "../Context/OrdersContext";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// components
import {Footer, NavBar, MpesaModal, Modal, Cancel, Success } from "../components";
import { backend } from "../components/data/url";

const Cart = () => {

    const navigate = useNavigate()
    const signInUser =()=>{
        navigate('/LoginPage')
      }
 
      const cart = useContext(CartContext);
      const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
      console.log(cart.items)
      const [mpesaModal, setMpesaModal] = useState(false)
      const [isSuccess,setIsSuccess] = useState(false);
      const [isModal, setIsModal ] = useState(false);
      const [canceled, setIsCanceled] = useState(false);
      const KES = localStorage.getItem('USD_KSH');
      const orders= useContext(OrdersContext);
      useEffect(() => {
        if (typeof window === 'undefined') {
          return;
        }
        if (window?.location.href.includes('success')) {
          setIsSuccess(true);
          // clearCart();
        }
        if (window?.location.href.includes('canceled')) {
          setIsCanceled(true);
        }
      }, []);
const checkout=()=>{
          const body ={
            items: cart.items, 
          }
          const headers ={
            "Content-Type": "application/json"
          }
          return fetch(`${backend}/payment/create-payment-intent`, {
            method:"POST",
            headers,
            body:JSON.stringify(body)
          }).then(response=>{
            return response.json();
          }).then((response) => {
                       if(response.url) {
                           window.location.assign(response.url); // Forwarding user to Stripe
                           orders.setorders(response.session_id)
                  }}).catch(error=>{
            console.log(error)
          })
        }
const mpesaPay=()=>{
setMpesaModal(true)
}
const closeMpesa=()=>{
  setMpesaModal(false)
}
const toggleSearch =()=>{
  setIsModal(!isModal)
}
const toggleSuccess=()=>{
  setIsSuccess(false);

}
const toggleCancel=()=>{
  setIsCanceled(false);
}

    return ( 
    <div>
      {mpesaModal &&
      <MpesaModal
      toggleMpesa={closeMpesa}
      amount={Math.ceil((cart.getTotalCost().toFixed(2))*KES)}
      items={cart.items}
      KES={KES}
      />
      }
       {isModal &&
         <Modal 
         toggleSearch={toggleSearch}
         />
      }
      {isSuccess &&
          <Success
     toggleSuccess={toggleSuccess}
           />
      }
      {canceled &&
      <Cancel
      toggleCancel={toggleCancel}
       />
      }
        <div className="cart-page">
 <NavBar 
 signInUser={signInUser} 
 toggleSearch={toggleSearch}
 />
<div className="w-full box-border flex bg-gray-100">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 mt-10 max-w-7xl mx-auto">

  <div className="bg-white rounded-md p-2.5 col-start-1 col-end-3  ">
    <div className="p-2.5 border border-b-gray-300 text-start font-bold">
      <h2> Cart</h2>
    </div>
      {cart.items && cart.items.map((item, index)=>(
          <div className="grid grid-cols-3 gap-2.5 p-2.5 border border-b-gray-300" key={index}>
            <div className="h-36 w-36 rounded-md overflow-hidden object-cover">
                 <img src={item.img} alt={item.img} className='object-cover w-full' />
            </div>
         
            <div className="text-start py-2.5 px-1.5 col-end-3 ">
            <h3>{item.title}</h3>

            <p className='mt-3 font-semibold'>{item.brands}</p>          
         
 <div className="flex flex-col justify-between items-end">
           <h3 className='text-end'>${item.price} || KSH{Math.ceil(item.price*KES*item.quantity)} </h3>
           <div className="flex gap-2 items-center py-2">
            <h3>Quantity:</h3>
          <button disabled={item.quantity===1000} onClick={() => cart.increaseQuantity(item._id)} className="p-2 border w-10">+</button>
          <div className="text-lg">{item.quantity}</div>
          <button onClick={() => cart.removeOneFromCart(item._id)} disabled={item.quantity===1} className="p-2 border w-10">-</button>

          </div>
          <button onClick={() => cart.deleteFromCart(item._id)} 
          className="duration-75 cursor-pointer hover:text-red-500">Remove <FontAwesomeIcon icon={faTrash} size="lg" /></button>
           </div>
            </div>
          
          </div>
        ))}
        
        
  </div>
   <div className="bg-white p-2.5 mt-5 rounded-md top-20 sticky h-80">
   {cart.items && cart.items.map((item, index)=>(
          <div className="flex justify-between gap-2.5 p-2.5 border border-b-gray-300" key={index}>

            <h6>{item.title}</h6>

           <h6 className='text-end'>${item.price*item.quantity} || KSH{Math.ceil(item.price*KES*item.quantity)} </h6>

            </div>
        ))}

   <div className="flex justify-between items-end my-2">
        <div>Items({productsCount})</div>
        <h3>Total: ${cart.getTotalCost().toFixed(2)} || KSH{Math.ceil((cart.getTotalCost().toFixed(2))*KES)} </h3>
    </div>

 <div className='flex gap-2.5 flex-row'>
   <button
     className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000 
      overflow-hidden relative mt-5 mx-auto cursor-pointer p-2 flex justify-center w-[80%] rounded-sm 
       duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500
        box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '
     onClick={checkout}
     >
      Checkout with Card
      </button>
      
      <button onClick={mpesaPay} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full
    before:bg-green-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative 
    mt-5 mx-auto cursor-pointer p-2 flex justify-center w-[80%] rounded-sm  duration-1000 border-0 transition-all  text-green-500 outline outline-offset-2 outline-green-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-400  hover:before:w-80 '
   >
    Pay with Mpesa
   </button>
 </div>
   

   </div>
       </div>
      
</div>
   
        <Footer />
        </div>
        </div>
     );
}
 
export default Cart;