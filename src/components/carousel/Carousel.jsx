
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// // or other themes
import '@splidejs/react-splide/css/default';
import '@splidejs/react-splide/css/sea-green';

// // or only core styles
// import '@splidejs/react-splide/css/core';
const options = {
     type         : 'loop',
     autoplay     : true,
     pauseOnHover : true,
     resetProgress: false,
   };
import useFetch from '../../UseFetch';
import LoadingSection from '../LoadingSection';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';


import { useNavigate } from 'react-router-dom';

const Carousel = () => {
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
    <div className='mt-10 pb-5 flex justify-center'> 
     <div 
     className="w-full box-border  p-3 flex flex-col justify-center gap-10 bg-white relative"
     >
      
      {isPending &&              
         <LoadingSection />        
                  }
               {error &&       
             <LoadingSection />
               }
     
     {products && 
     <div className="flex gap-3 p-4 items-center">
                 <h3>Stationary</h3>   
                 <button onClick={()=>filteredCategoryPage('Stationary')} 
                 className='flex gap-1 duration-75 font-semibold hover:underline items-center hover:text-blue-400 '>View More <FontAwesomeIcon icon={faChevronRight} /></button>  
            </div>}

 <Splide
  options={options}
  hasTrack={true}
 className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

               {products && products.filter((product)=>product.device ==="Stationary").slice(0, 8).map((product)=> (
                
                 <SplideSlide  key={product._id}>
                  <div 
                  className={`cursor-pointer  bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 aspect-square my-5`} 
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
               </SplideSlide>
               ))}
               
            </Splide>
{products && <div className="selections">
                 <h3>Mobile Devices</h3>     
            </div>}
 <Splide className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">

   
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
                  <SplideSlide   key={product._id}>
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
               </SplideSlide>
               ))}
               
            </Splide>

         {/* <h2 className="text-2xl py-3">Featured Products on Amazon</h2> */}
            {products && 
             <div className="selections">
             <h3>PCs</h3>  
              </div>}
           
            <Splide className="grid  gap-2.5 grid-cols-2  lg:grid-cols-4">
               
            {products && products.filter((product)=> product.device ==="PC").map((product)=> (
            <SplideSlide   key={product._id}>
                  <div className="cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 px-4"
                   key={product._id} 
                  //  onClick={event=>selectProduct(event, product._id)}
                   >
         <a href="https://www.amazon.com/gp/product/B09JF9WMR9/ref=ox_sc_act_image_1?smid=ATVPDKIKX0DER&psc=1" rel="noreferrer" target="_blank">
                  <div className="product-image">
                   <img src={product.img} alt={product.img} />  
                  </div> 
                  <div className="p-4">
                  <p className='Product-title'>{product.title}</p>
                  
                  <span>${product.price}</span>
                  
                  </div>
                  </a>
               </div>
            </SplideSlide>
               ))}   
               
            </Splide>
            
</div>

    </div>
  );
};

export default Carousel;

