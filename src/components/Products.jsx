import useFetch from '../UseFetch';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';


import { useNavigate } from 'react-router-dom';
import LoadingSection from './LoadingSection';

const Products = () => {
   
     const { data:products, isPending, error } = useFetch('https://besk-merchants.netlify.app/.netlify/functions/api/api/products/');
     

     const navigate = useNavigate();

     const selectProduct = (event, id)=>{
      localStorage.setItem('id', id)
      navigate(`/ProductPage/${id}`)
     }
     const filteredCategoryPage = (categoryName)=>{
      localStorage.setItem('categorySelected', categoryName)
      navigate(`/Category/${categoryName}`)
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

            {products && <div className="flex gap-3 py-2 px-4 items-center bg-red-400 justify-between">
                 <h3>Stationary</h3>   
                 <button onClick={()=>filteredCategoryPage('Stationary')} 
                 className='flex gap-1 duration-75 font-semibold hover:underline items-center hover:text-blue-400 '>View More <FontAwesomeIcon icon={faChevronRight} /></button>  
            </div>
            
            }

 <div className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

   
               {products && products.filter((product)=>product.device ==="Stationary").slice(0, 4).map((product)=> (
                  <div   key={product._id}>
                  <div 
                  className={`cursor-pointer  bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 aspect-square `} 
                   onClick={event=>selectProduct(event, product._id)}>
                   
                   <div 
   className="w-full h-3/4 object-cover bg-no-repeat"
      style={{backgroundImage: `url(${product.img})`}}
   >
   </div> 
                  <div className="p-4 font-semibold">
                  <p>{product.title}</p>
                  <span>${product.price}</span>
                  
                  </div>
              
               </div>
               </div>
               ))}
               
            </div>

{products && <div className="flex gap-3 py-2 px-4 items-center bg-red-400 justify-between mt-5">
                 <h3>Mobile Devices</h3>     
            </div>}
 <div className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

   
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
                  <div   key={product._id}>
                  <div 
                  className={`cursor-pointer  bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 `} 
                   onClick={event=>selectProduct(event, product._id)}>
                   
                  <div className="product-image">
                   <img src={product.img} alt={product.title} />  
                  </div> 
                  <div className="p-4 font-semibold">
                  <p>{product.title}</p>
                  <span>${product.price}</span>
                  
                  </div>
              
               </div>
               </div>
               ))}
               
            </div>

         <h2 className="text-2xl py-3">Featured Products on Amazon</h2>
            {products && 
             <div className="flex gap-3 py-2 px-4 items-center bg-red-400 justify-between mt-5">
   
             <h3>PCs</h3>  
              </div>}
           
           
            
           
        </div>
        </>
     );
}
 
export default Products;