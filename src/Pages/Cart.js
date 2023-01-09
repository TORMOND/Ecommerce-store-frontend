// import useFetch from '../UseFetch'
import Footer from "../Components/footer";
import NavBar from "../Components/NavBar";
import {useNavigate } from 'react-router-dom'
import '../index.css';
import { useEffect, useState } from 'react';

const Cart = () => {
    
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    // const {data:product, isPending, error} = useFetch('http://localhost:4000/api/products/' + id)
   
    const fetchCartItems =()=>{
      const fetchedItems = [...items]

      for(let i=0; i< fetchedItems.length; i++){
         console.log(fetchedItems[i])
      }
    }
    useEffect(()=>{
      fetchCartItems()
    })
    
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
      }
    return ( 
        <div className="cart-page">
 <NavBar signInUser={signInUser}  categories={categories} />
        <div className="AD-section">
        <h3>Cart Page</h3>
        </div>
        {items && items.map((item, index)=>(
          <div className="cart-item" key={index} >
            <p className="cart-id">{item}</p>
            <button className="delete-btn" onClick={()=>removeCartItem(index)}>Delete</button>
          </div>
        ))}
       
        <Footer />
        </div>
     );
}
 
export default Cart;