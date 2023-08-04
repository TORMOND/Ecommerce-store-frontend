import useFetch from '../UseFetch';
import { CartContext } from "../Context/CartContext";
import { useContext, useState, useEffect } from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import MpesaModal from './MpesaModal';

const SelectedProduct = () => {
  const id = localStorage.getItem('id');
  const [canceled, setIsCanceled] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      // clearCart();
    }
    if (window?.location.href.includes('cancel')) {
      setIsCanceled(true);
    }
  }, []);
   const {data:product, isPending, error} = useFetch('https://besk-merchants.netlify.app/.netlify/functions/api/api/products/' + id);
   const [isSuccess,setIsSuccess] = useState(false);
   let [quantity, setQuantity] = useState(1);
   
   const incrementQuantity=()=>{
    setQuantity(quantity++)
   }
   const decrementQuantity=()=>{
    setQuantity(quantity--)
   }
 const makePayment = (stripeId)=>{
  const body ={
    id:stripeId,
    quantity:quantity,
  }
  const headers ={
    "Content-Type": "application/json"
  }
  return fetch(`https://besk-merchants.netlify.app/.netlify/functions/api/api/payment/create-payment-intent-trial`,{
    method:"POST",
    headers,
    body:JSON.stringify(body)
  }).then((response) => {
    return response.json();
}).then((response) => {
    if(response.url) {
        window.location.assign(response.url); // Forwarding user to Stripe
    }
  
}).catch(error=>{
    console.log(error)
  })
 }
 const item = [];
 let prod ={...product, quantity}
 product? item.push(prod) : []

 console.log(item)


 const cart = useContext(CartContext);

 const [mpesaModal, setMpesaModal] = useState(false)
 const mpesaPay=()=>{
  setMpesaModal(true)
  }
  const closeMpesa=()=>{
    setMpesaModal(false)
  }
  if (isSuccess) {
    return (
      <>

        <div className="">
          <div className="">
            <div className="">
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (canceled) {
    return (
      <>

        <div className="">
          <div className="">
            <div className="">
              <h1>Order canceled</h1>
              <p>.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
    return ( 
       <div>
 {mpesaModal && product &&
      <MpesaModal
      toggleMpesa={closeMpesa}
      amount={product.price}
      items={item}
      />
      }
      
     <div className="min-h-[80vh] flex flex-col">
{isPending && <div className='w-screen box-border'>
        <div className="loading-selected-product">
        <div className="loading-image animate-pulse ">

</div>
 <div className="loading-infor animate-pulse ">
<div className="loading-title animate-pulse "></div>
<p className="loading-brand animate-pulse "></p>
<div className="loading-rating animate-pulse "></div>
<p className="loading-price animate-pulse "></p>
<div className="loading-details animate-pulse ">
  <ul className='loading-specs animate-pulse '>
    <li></li>
  </ul>
</div>
 </div>
 <div className="loading-actions animate-pulse ">
  <div className="loading-price animate-pulse "></div>
  <div className="loading-extra-fees animate-pulse "></div>
  <div className="loading-delivery-period animate-pulse "></div>
  <div className="loading-btns animate-pulse ">
    <button className='animate-pulse '></button>
    <button className='animate-pulse '></button>
  </div>
 </div>
        </div>
        
      </div>}

{error && <div>
        
        <div className="loading-selected-product">
        <div className="loading-image">

</div>
 <div className="loading-infor">
<div className="loading-title"></div>
<p className="loading-price"></p>
<p className="loading-brand"></p>
<div className="loading-rating"></div>
<div className="loading-details">
  <ul className='loading-specs'>
    <li></li>
    <li></li>
  </ul>
</div>
 </div>
 <div className="loading-actions">
  <div className="loading-price"></div>
  <div className="loading-extra-fees"></div>
  <div className="loading-delivery-period"></div>
  <div className="loading-btns">
    <button></button>
    <button></button>
  </div>
 </div>
        </div>

        </div>}

{product && 
 <div className="flex gap-2 items-start w-full bg-white min-h-screen max-w-7xl mx-auto">
      
<div className="w-2/5 top-36 sticky object-cover h-5/6">
<img src={product.img} alt={product.title} className='h-full w-full' />
</div>
<div className='w-3/5 flex flex-col lg:flex-row gap-2.5 '>

<div className="w-full lg:w-3/5 flex flex-col justify-start mt-5 text-start">
<h2 className='product-title'>{product.title}</h2>
<p className='product-brand'>Brand:{product.brands}</p>

<h3 className='product-price'>${product.price}</h3>

<div className="details">
    <h3>About this item</h3>
    <ul className='specs'>
      {product.details.map((element, index) => (
        <li key={index} className='text-start ml-2.5 py-1.5'>{element}</li>
      ))}
      
    </ul>
</div>
</div>
<div className="w-full lg:w-2/5 top-36 sticky mt-5 rounded-sm border border-gray-300 flex flex-col gap-5 p-4 text-start ">
<h3 className='product-price'>${product.price*quantity}</h3>
 
{product.stripeId}

<div className="flex flex-col gap-5 py-2.5 px-4 ">
<div className="flex gap-2 item-center">
            <h3>Quantity:</h3>
          <button disabled={quantity===1000} onClick={incrementQuantity} className="p-2 border w-10">+</button>
          <div className="text-lg">{quantity}</div>
          <button onClick={decrementQuantity} disabled={quantity===1} className="p-2 border w-10">-</button>

          </div>
  
   <button onClick={()=>cart.addOneToCart(product)} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '
   >
      <FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />Add to Cart</button>

  <button onClick={()=>makePayment(product.stripeId)} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '
   >
    Buy Now
   </button>
<div className="">
  <button onClick={mpesaPay} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-green-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-green-500 outline outline-offset-2 outline-green-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-400  hover:before:w-80 '
   >
    Pay with Mpesa
   </button>
</div>

    

</div>
</div>
</div>
  </div>

}    </div>
        </div>
     );
}

export default SelectedProduct;