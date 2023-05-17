import useFetch from '../UseFetch';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';

import { useNavigate } from 'react-router-dom';
import LoadingSection from './LoadingSection';

const Products = () => {
   
     const { data:products, isPending, error } = useFetch('http://localhost:4000/api/products/')

     const navigate = useNavigate()
     const selectProduct = (event, id)=>{
      localStorage.setItem('id', id)
      navigate(`/ProductPage/${id}`)
     }
     
    return ( 
        <>
        <div className="bg-gray-300 p-5">
               {isPending &&              
         <LoadingSection />        
                  }
               {error &&       
             <LoadingSection />
               }
{products && <div className="selections">
                 <h3>Mobile Devices</h3>     
            </div>}

 <div className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

   
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
                  <div   key={product._id}>
                  <div className="cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 " onClick={event=>selectProduct(event, product._id)}>
                   
                  <div className="product-image">
                   <img src={product.img} alt={product.title} />  
                  </div> 
                  <div className="p-4">
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
                  
                  </div>
              
               </div>
               </div>
               ))}
               
            </div>
            {products && 
             <div className="selections">
             <h3>PCs</h3>  
              </div>}
           
            <div className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">
               
            {products && products.filter((product)=> product.device ==="PC").map((product)=> (
            <>
                  <div className="product" key={product._id} onClick={event=>selectProduct(event, product._id)}>
         
                  <div className="product-image">
                   <img src={product.img} alt={product.img} />  
                  </div> 
                  <div className="product-infor">
                  <p className='Product-title'>{product.title}</p>
                  <div className="text-yellow-500 ">
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
            </>
               ))}   
               
            </div>
            
           
        </div>
        </>
     );
}
 
export default Products;