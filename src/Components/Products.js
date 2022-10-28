import '../index.css';
import useFetch from '../UseFetch';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
// import { faUser } from '@fortawesome/free-regular-svg-icons';

import { useNavigate } from 'react-router-dom';
import LoadingSection from './LoadingSection';
const Products = () => {
   
     const {data:products, isPending, error} = useFetch('http://localhost:4000/api/products/')

     const navigate = useNavigate()
     const selectProduct = (event, id)=>{
      navigate(`/ProductPage/${id}`)
      console.log(event)
      console.log(id)
     }
     
    return ( 
        <>
        <div className="products-section">
               {isPending &&              
         <LoadingSection />        
                  }
               {error &&       
             <LoadingSection />
               }

<div className="selections">
           <h3>Mobile Devices</h3>     
            </div>
 <div className="new-Arrivals">
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
                  <div className="product"  key={product._id} onClick={event=>selectProduct(event, product._id)}>
                   

                  <div className="product-image">
                   <img src={product.img} alt={product.title} />  
                  </div> 
                  <div className="product-infor">
                  <p>{product.title}</p>
                  <div className="rating">
                  <FontAwesomeIcon icon={ faStar} className='ratings' />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={faStarHalfStroke} className='ratings'  />
                  <p>123</p>
                  </div>
                  

                  <span>${product.price}</span>
                  <div className="btn">
                  <button className='view-product'>view product</button>   
                  </div>
                  
                  </div>
              
               </div>
               ))}
               
            
            </div>
            <div className="selections">
           <h3>PCs</h3>  
            </div>

            
 
            <div className="top-sellers">
            {products && products.filter((product)=> product.device ==="PC").map((product)=> (
            
                  <div className="product" key={product._id} onClick={event=>selectProduct(event, product._id)}>
         
                  <div className="product-image">
                   <img src={product.img} alt={product.img} />  
                  </div> 
                  <div className="product-infor">
                  <p className='Product-title'>{product.title}</p>
                  <div className="rating">
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={ faStar} className='ratings'  />
                  <FontAwesomeIcon icon={faStarHalfStroke} className='ratings'  />
                  <p>123</p>
                  </div>
                  

                  <span>${product.price}</span>
                  <div className="btn">
                  <button className='view-product'>view product</button>   
                  </div>
                  
                  </div>
 
               </div>
            
               ))}   
               
            </div>
            <div className="selections">
           <h3>Deal of The Day</h3>     
            </div>
           
 
            <div className="deals">
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
               <div className="product"></div>
               )
)}
            </div>
        </div>
        </>
     );
}
 
export default Products;