// import '../Assets/index.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const options = {
     type         : 'loop',
     autoplay     : false,
     pauseOnHover : true,
     resetProgress: false,
     perPage: 4,
   };

const Loading = () => {
    return ( 
     <div  className="w-full my-4 rounded-sm overflow-hidden shadow-md shadow-gray-400/50">
     <div className="flex gap-3 py-2 px-4 items-center bg-gray-300 justify-between animate-pulse ">
         <h3 className=''></h3>   
         <button 
         className='flex gap-1 duration-75 font-semibold hover:underline items-center hover:text-blue-400 '></button>  
    </div>

    <Splide  
options={options}     
hasTrack={true}
className='w-screen box-border md:w-full h-full flex relative  p-0 m-0 bg-white'>

          <SplideSlide 
          className={`cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl mx-2 shadow-gray-500/50 aspect-square`} 
           >
           
<div 
className="w-[80%] aspect-square object-contain  bg-no-repeat mt-2 animate-pulse  bg-gray-300 rounded-md flex">
{/* <img className='w-full aspect-square object-contain ' /> */}
<FontAwesomeIcon icon={faImage}  size="3xl" className='m-auto text-gray-500  animate-pulse ' />
</div> 
          <div className="p-4 font-semibold">
          <p className='text-sm md:text-md animate-pulse bg-gray-300 p-3 w-[80%] rounded-md'></p>
          {/* <span className='animate-pulse mt-2 bg-gray-300 p-2 w-[80%] rounded-md'></span> */}
          
          </div>
      
      
       </SplideSlide>
     
       <SplideSlide 
          className={`cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl mx-2 shadow-gray-500/50 aspect-square`} 
           >
           
<div 
className="w-[80%] aspect-square object-contain  bg-no-repeat mt-2 animate-pulse  bg-gray-300 rounded-md flex">
{/* <img className='w-full aspect-square object-contain ' /> */}
<FontAwesomeIcon icon={faImage}  size="3xl" className='m-auto text-gray-500  animate-pulse ' />
</div> 
          <div className="p-4 font-semibold">
          <p className='text-sm md:text-md animate-pulse bg-gray-300 p-3 w-[80%] rounded-md'></p>
          {/* <span className='animate-pulse mt-2 bg-gray-300 p-2 w-[80%] rounded-md'></span> */}
          
          </div>
      
      
       </SplideSlide>
       <SplideSlide 
          className={`cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl mx-2 shadow-gray-500/50 aspect-square`} 
           >
           
<div 
className="w-[80%] aspect-square object-contain  bg-no-repeat mt-2 animate-pulse  bg-gray-300 rounded-md flex">
{/* <img className='w-full aspect-square object-contain ' /> */}
<FontAwesomeIcon icon={faImage}  size="3xl" className='m-auto text-gray-500  animate-pulse ' />
</div> 
          <div className="p-4 font-semibold">
          <p className='text-sm md:text-md animate-pulse bg-gray-300 p-3 w-[80%] rounded-md'></p>
          {/* <span className='animate-pulse mt-2 bg-gray-300 p-2 w-[80%] rounded-md'></span> */}
          
          </div>
      
      
       </SplideSlide>
       <SplideSlide 
          className={`cursor-pointer bg-white duration-75 rounded-sm hover:shadow-xl mx-2 shadow-gray-500/50 aspect-square`} 
           >
           
<div 
className="w-[80%] aspect-square object-contain  bg-no-repeat mt-2 animate-pulse  bg-gray-300 rounded-md flex">
{/* <img className='w-full aspect-square object-contain ' /> */}
<FontAwesomeIcon icon={faImage}  size="3xl" className='m-auto text-gray-500  animate-pulse ' />
</div> 
          <div className="p-4 font-semibold">
          <p className='text-sm md:text-md animate-pulse bg-gray-300 p-3 w-[80%] rounded-md'></p>
          {/* <span className='animate-pulse mt-2 bg-gray-300 p-2 w-[80%] rounded-md'></span> */}
          
          </div>
      
      
       </SplideSlide>
    </Splide>
    
    </div> 
     );
}
 
export default Loading;