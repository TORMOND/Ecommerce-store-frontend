import {useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { useCartsContext } from "../Hooks/UseCartContext";

// components
import {Footer, NavBar, FetchCarts} from "../components"


const Cart = () => {
  const { dispatch } = useCartsContext()
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
 
 const { newItems, new_sum } = FetchCarts()

    const navigate = useNavigate()
    const signInUser =()=>{
        navigate('/LoginPage')
      }
      const categories=()=>{
        
      }
  const removeCartItem = (index)=>{
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    console.log(updatedItems)
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    dispatch({type: 'DELETE_CART', payload: items})
      }

    return ( 
        <div className="cart-page">
 <NavBar signInUser={signInUser}  categories={categories} />
     
<div className="grig grid-cols-3 gap-2.5">
  <div className="bg-white rounded-md p-2.5 col-start-1 col-end-3  ">
    <div className="p-2.5 border border-b-gray-300 text-start font-bold">
      <h1>Shopping Cart</h1>
    </div>
      {newItems && newItems.map((item, index)=>(
          <div className="grid grid-cols-3 gap-2.5 p-2.5 border border-b-gray-300" key={index} >
            <div className="box-border object-cover">
                 <img src={item.img} alt={item.img} className='object-cover w-full' />
            </div>
         
            <div className="text-start py-2.5 px 1.5">
            <h3>{item.title}</h3>

            <p className='mt-3 font-semibold'>{item.brands}</p>
         
            <button className="mt-3 py-1.5 px-2 outline-1 outline-purple-500 cursor-pointer duration-75 border-0 hover:bg-purple-500 text-white" onClick={()=>removeCartItem(index)}>Delete</button>
            </div>
           <div className="flex flex-col justify-between items-end">
           <h3 className='text-end'>${item.price}</h3>
           </div>
          </div>
        ))}
        <div className="flex justify-between items-end">
      <h1>Total:</h1>
      <h1>${new_sum}</h1>
    </div>
  </div>
   <div className="bg-white p-2.5mt-5 rounded-md top-0 sticky h-80">
   {newItems && newItems.map((item, index)=>(
    <ul className='checkout-list' key={index}>
      <li className='list-none flex gap-2 py-3 px-1 justify-between w-full'>
        <h3>{item.title}</h3>
        <h3>
          ${item.price}
          <button className='remove-btn'></button>
          </h3>
        </li>
    </ul>
   ))}

   <div className='flex justify-between py-3 px-1 '>
   <h3>Total:</h3>
      <h3>${new_sum}</h3>
   </div>

    <button
     className='py-1.5 px-2 outline-1 outline-purple-500 text-white cursor-pointer duration-75 border-0 hover:bg-white hover:text-purple-500'
     >
      Checkout Products
      </button>
   </div>
       
</div>
   
        <Footer />
        </div>
     );
}
 
export default Cart;