import useFetch from '../UseFetch';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


import { useNavigate } from 'react-router-dom';
import LoadingSection from './LoadingSection';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/default';

const options = {
     type         : 'loop',
     autoplay     : false,
     pauseOnHover : true,
     resetProgress: false,
     perPage: 4,
   };

  //  import Categories from './Categories';

const Products = () => {
   
     const { data:products, isPending, error } = useFetch('https://besk-merchants.netlify.app/.netlify/functions/api/api/Products/');

let categories = [] 
const findCategories =(products)=>{

for(let i =0; i< products.length; i++){
   categories.push(products[i].device)
}
const y = Array.from(new Set(categories))
return y
}

           const items = products? findCategories(products): [] 
    
     const navigate = useNavigate();

     const selectProduct = (event, id)=>{
      localStorage.setItem('id', id)
      navigate(`/ProductPage/${id}`)
     }
     const filteredCategoryPage = (categoryName)=>{
      localStorage.setItem('categorySelected', categoryName)
      navigate(`/Category/${categoryName}`)
    }
    function getDeviceType() {
      const width = window.innerWidth;
      if (width < 768) {
          return 'Mobile';
      } else if (width >= 768 && width < 1024) {
          return 'Tablet';
      } else {
          return 'Desktop';
      }
  }

  // Usage example
  const deviceType = getDeviceType();
  console.log('Device type:', deviceType); 
  deviceType==='Mobile'? options.perPage = 2:options.perPage = 4
    return ( 
        <div className="w-full box-border md:w-full flex justify-center">
        <div className="bg-gray-100 p-0  lg:p-5 max-w-7xl mx-auto">

               {isPending &&              
         <LoadingSection />        
                  }
               {error &&       
             <LoadingSection />
               }



            {products &&

            items.map((item)=>(
                <div key={products._id} className="w-full my-4 rounded-sm overflow-hidden shadow-md shadow-gray-400/50">
             <div className="flex gap-3 py-2 px-4 items-center bg-purple-400 justify-between">
                 <h3>{item}</h3>   
                 <button onClick={()=>filteredCategoryPage(`${item}`)} 
                 className='flex gap-1 duration-75 font-semibold hover:underline items-center hover:text-blue-400 '>View More <FontAwesomeIcon icon={faChevronRight} /></button>  
            </div>

            <Splide  
        options={options}     
        hasTrack={true}
        className='w-screen box-border md:w-full h-full flex relative  p-0 m-0 bg-white'>
   
               {products.filter((product)=>product.device ===item).slice(0, 10).map((product)=> (
                  <SplideSlide   key={product._id}
                  className={`cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl mx-2 shadow-gray-500/50 aspect-square`} 
                   onClick={event=>selectProduct(event, product._id)}>
                   
       <div 
      className="w-[80%] aspect-square object-contain  bg-no-repeat">
      <img src={product.img} alt={product.img} className='w-full  object-contain' />
   </div> 
                  <div className="p-4 font-semibold">
                  <p className='text-sm md:text-md'>{product.title}</p>
                  <span className=''>${product.price}</span>
                  
                  </div>
              
              
               </SplideSlide>
               ))}
               
            </Splide>
            </div>
            ))
            
            }


        </div>
        </div>
     );
}
 
export default Products;