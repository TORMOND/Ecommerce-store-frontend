import '../index.css';
import useFetch from '../UseFetch'
import { useState } from 'react';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faCartShopping } from '@fortawesome/free-solid-svg-icons';

// import { faUser } from '@fortawesome/free-regular-svg-icons';

const SelectedProduct = ({initiatePayment}) => {
  const id = localStorage.getItem('id')

   const {data:product, isPending, error} = useFetch('http://localhost:4000/api/products/' + id)

   const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

   const addToCart =(event, id)=>{

    const updatedItems = [...items];
        updatedItems.push(id)
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        console.log(event);
        alert('Added to cart')
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
 <div className="selected-product">
      
<div className="selected-product-image">
<img src={product.img} alt={product.title} className='item-image' />
</div>
<div className="product-infor">
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
        <li key={index}>{element}</li>
      ))}
      
    </ul>
</div>
</div>
<div className="actions">
<h3 className='product-price'>${product.price}</h3>
<p className='extra-fees'>${product.price * 0.17} Shipping & Import Fees Deposit to Kenya <span className='extra-details'> Details</span> </p>

<p className='delivery-period'>Delivery: February 7 - 10</p>

<div className="btns">
    <button onClick={event=>addToCart(event ,product._id)}><FontAwesomeIcon icon={faCartShopping}  className="shoppingCart" />Add to Cart</button>
    <button onClick={initiatePayment}>Buy Now</button>
</div>
</div>
  </div>

}   
        </>
     );
}

export default SelectedProduct;