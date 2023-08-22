 import useFetch from '../UseFetch';
 import {useState} from 'react';

 import { NavBar, Footer, Modal  }from '../components';

import { useNavigate} from 'react-router-dom';
import LoadingSection from '../components/LoadingSection';
import { backend } from "../components/data/url";

const FilteredCategoryPage = () => { 
   const category =localStorage.getItem('categorySelected')
    const { data:products, isPending, error } = useFetch(`${backend}/products/getFilteredProducts/${category}`);
  
     const navigate = useNavigate();
     const selectProduct = (event, id)=>{
      localStorage.setItem('id', id)
      navigate(`/ProductPage/${id}`)
     }
     const [isModal, setIsModal ] = useState(false);
  const toggleSearch =()=>{
    setIsModal(!isModal)
  }
     
    return ( 
      <div className="relative bg-gray-300 box-border">
         
    {isModal &&
         <Modal 
         toggleSearch={toggleSearch}
         />
      }
 
        <div className="w-full box-border min-h-screen">
        <NavBar
         toggleSearch={toggleSearch}
        />

        <div className="p-5">
         <div className="">
            <select>
               <option value="">
                  Price:(lowest- highest)
               </option>
               <option value="">
                  Price:(highest - lowest)
               </option>
               <option value="">
               </option>
            </select>
         </div>
         <h2 className="text-2xl py-3">Featured Products</h2>
               {isPending &&              
         <LoadingSection />      
                  }
               {error &&       
             <p className='w-full text-center font-semibold'>No Products added in this category</p>
               }
{products && <div className="selections">
               
            </div>}

            <div className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

   
{products && products.map((product)=> (
   <div   key={product._id}>
   <div 
   className={`cursor-pointer  bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 aspect-square`} 
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
        
            
           
        </div>
        <Footer />
        </div>
        </div>
     );
}
 

 
export default FilteredCategoryPage;