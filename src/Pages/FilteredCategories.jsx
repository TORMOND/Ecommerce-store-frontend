 import useFetch from '../UseFetch';
 import {useState} from 'react';
 import {ProductsContext} from '../Context/ProductsContext'
 import { useContext } from "react";
 import { NavBar, Footer, Modal  }from '../components';

// FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';


import { useNavigate } from 'react-router-dom';
import LoadingSection from '../components/LoadingSection';

const FilteredCategoryPage = () => { 

    const { data:products, isPending, error } = useFetch('https://besk-merchants.netlify.app/.netlify/functions/api/api/products/');
    const prodContext = useContext(ProductsContext);
    prodContext.setFilteredItems(products);

   //  const [contacts, setContacts] = useState(false);
   //  const ref = useRef(null);

   //  const contacts_ref = useRef(null)
   //  const togglePopup =()=>{
    
   //    setContacts(null)
   //    }

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
        {/* { contacts && <div id='popups' ref={ref}>

<Contacts ref={contacts_ref} togglePopup={togglePopup}  />

 </div>} */}
 
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
             <p>Error</p>
               }
{products && <div className="selections">
               
            </div>}

            <div className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

   
{products && products.filter((product)=>product).map((product)=> (
   <div   key={product._id}>
   <div 
   className={`cursor-pointer  bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 aspect-square`} 
   onClick={event=>selectProduct(event, product._id)}

   >
    
   <div 
   className="w-full h-3/4 object-cover bg-no-repeat"
      style={{backgroundImage: `url(${product.img})`}}
   >
   </div> 
   <div className="p-4 font-semibold">
   <p>{product.title}</p>
   <p>{product.category}</p>
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