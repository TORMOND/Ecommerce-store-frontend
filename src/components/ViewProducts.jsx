
// import {  useRef, useState } from 'react';
import useFetch from '../UseFetch'

const ViewProducts = ({closePopup}) => {
    const id  = localStorage.getItem('selectedProduct')
    const {data:product, isPending, error} = useFetch('http://localhost:4000/api/products/' + id)
     const deleteItem = async(id)=>{
        const response = await fetch('http://localhost:4000/api/Products/'+ id, {
            method: 'DELETE',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({id})
        })
        const json = await response.json()
        if(!response.ok){
        console.log("error occured")
        }
        if(response.ok){
         console.log(`success you've deleted ${id}, ${json}`) 
         closePopup()
        }
     }
     const updateItem = async(id)=>{
       
     }
     const close = ()=>{
        closePopup()
     }
    return (    
    <div id="popup-container">
        <div className="top-part">
        <button onClick={close}>X</button>
        </div>
    {
        product && 
            <div className="cart-item"  >
            <div className="cart-image">
                 <img src={product.img} alt={product.img} className='image' />
            </div>
         
            <div className="main-cart-section">
            <h3>{product.title}</h3>
            <p>{product.brands}</p>
         
            
            </div>
           <div className="side-section">
           <h3>${product.price}</h3>
           <div className="functionality-btns">
           <button className="delete-btn" onClick={()=>deleteItem(product._id)}>Delete</button>
           <button className="delete-btn" onClick={()=>updateItem(product._id)}>Update</button>
           </div>
           
           </div>
          </div>
      
     
    }
    
  
    </div>
     );
}
 
export default ViewProducts;