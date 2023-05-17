import useFetch from '../UseFetch'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartsContext } from "../Hooks/UseCartContext";


// import { faUser } from '@fortawesome/free-regular-svg-icons';

const SelectedProduct = () => {
  const { dispatch} = useCartsContext()
  const id = localStorage.getItem('id')
  // const navigate = useNavigate()


   const {data:product, isPending, error} = useFetch('http://localhost:4000/api/products/' + id)
  //  const {inCart, setInCart} = useState(false)

   const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

   const addToCart =()=>{

    const updatedItems = [...items];

        updatedItems.push(product)
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        alert('Added to cart')
        dispatch({type: 'CREATE_CARTS', payload: items})
   }
 

 const makePayment = token=>{
  const body ={
    token,
    product
  }
  const headers ={
    "Content-Type": "application/json"
  }
  return fetch(`http://localhost:4000/api/payment/create-payment-intent`,{
    method:"POST",
    headers,
    body:JSON.stringify(body)
  }).then(response=>{
    console.log(response)
    // sendPayInforToDtb(response)
  }).catch(error=>{
    console.log(error)
  })
 }

    return ( 
       
     <>
{isPending && <div>
        <div className="loading-selected-product">
        <div className="loading-image">

</div>
 <div className="loading-infor">
<div className="loading-title"></div>
<p className="loading-brand"></p>
<div className="loading-rating"></div>
<p className="loading-price"></p>
<div className="loading-details">
  <ul className='loading-specs'>
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
 <div className="flex w-full bg-white min-h-screen">
      
<div className="w-2/5 top-36 sticky object-cover h-5/6">
<img src={product.img} alt={product.title} className='h-full w-full' />
</div>
<div className="w-2/5 flex flex-col justify-start mt-5 text-start">
<h2 className='product-title'>{product.title}</h2>
<p className='product-brand'>Brand:{product.brands}</p>
<div className="rating">
                  <FontAwesomeIcon icon={ faStar} className='ratings' />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={faStarHalfStroke} className='ratings'  />
                  <p>123</p>
                  </div>
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
<div className="w-1/4 mt-5 rounded-sm border border-gray-300 flex flex-col gap-5 p-4 text-start ">
<h3 className='product-price'>${product.price}</h3>
<p className='extra-fees'>${product.price * 0.17} Shipping & Import Fees Deposit to Kenya <span className='text-blue-500 cursor-pointer hover:underline underline-offset-4 '> Details</span> </p>

{/* <p className='delivery-period'>Delivery: February 7 - 10</p> */}

<div className="flex flex-col gap-5 py-2.5 px-4 ">
  {/* {
   inCart ?  <button onClick={event=>addToCart(event ,product._id)}><FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />Add to Cart</button>:
   <button disabled><FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />incart</button>
   
  } */}
    
    <button onClick={event=>addToCart(event ,product._id)} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '
   >
      <FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />Add to Cart</button>
  

<StripeCheckout
stripeKey="pk_test_51MRy78HywWCM81uo7ItDdAeqigeCdJPJi81SFvc2BjRRflU6hLp2dU8LghwcMocC97J6Olxwv1YtIg9zOueOO7zK00PMAjUvtR"
token={makePayment}
name="buy product"
amount={product.price}
>
  <button onClick={makePayment} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '
   >
    
    Buy Now</button>


</StripeCheckout>
    

</div>
</div>
  </div>

}   
        </>
     );
}

export default SelectedProduct;