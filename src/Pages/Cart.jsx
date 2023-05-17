import {useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { useCartsContext } from "../Hooks/UseCartContext";

// components
import Footer from "../Components/footer";
import NavBar from "../Components/NavBar";
// import '../Assets/index.css';

//Custom hook
import FetchCarts from "../Components/FetchCart";

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
     
<div className="cart-page-container">
  <div className="items-wrapper">
    <div className="heading">
      <h1>Shopping Cart</h1>
    </div>
      {newItems && newItems.map((item, index)=>(
          <div className="cart-item" key={index} >
            <div className="cart-image">
                 <img src={item.img} alt={item.img} className='image' />
            </div>
         
            <div className="main-cart-section">
            <h3>{item.title}</h3>

            <p className='item-brands '>{item.brands}</p>
         
            <button className="delete-btn" onClick={()=>removeCartItem(index)}>Delete</button>
            </div>
           <div className="side-section">
           <h3>${item.price}</h3>
           </div>
          </div>
        ))}
        <div className="bottom-cart-section">
      <h1>Total:</h1>
      <h1>${new_sum}</h1>
    </div>
  </div>
   <div className="cart-checkout">
   {newItems && newItems.map((item, index)=>(
    <ul className='checkout-list' key={index}>
      <li>
        <h3>{item.title}</h3>
        <h3>
          ${item.price}
          <button className='remove-btn'></button>
          </h3>
        </li>
    </ul>
   ))}

   <div className='sum-checkout-details'>
   <h3>Total:</h3>
      <h3>${new_sum}</h3>
   </div>

    <button className='checkout-btn'>Checkout Products</button>
   </div>
       
</div>
   
        <Footer />
        </div>
     );
}
 
export default Cart;