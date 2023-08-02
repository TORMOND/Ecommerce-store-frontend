import { useState } from 'react';
import { allCategories }from "./data/categories";
import { useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
// // or other themes
import '@splidejs/react-splide/css/default';

const options = {
     type         : 'loop',
     autoplay     : false,
     pauseOnHover : true,
     resetProgress: false,
     perPage: 4,
   };

const Categories = () => {
  const [categories] = useState(allCategories)
  const navigate = useNavigate()

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
    <div className=" w-full flex justify-center">
        <Splide  
        options={options}
        hasTrack={true}
        className='w-full flex gap-2.5 p-3 max-w-7xl'
        >
        {
            categories && categories.map((category, id)=>(
        <SplideSlide
         onClick={()=>filteredCategoryPage(category.categoryName)}
         className="cursor-pointer  bg-no-repeat bg-cover m-2 rounded-md overflow-hidden duration-75  hover:shadow-xl shadow-gray-500/50 h-64 flex items-end"   
         style={{backgroundImage: `url(${category.img})`}}
         key={id}>
          
          <div className='w-full h-10 duration-75 text-puple-600 bg-[#0c0c0c8f] text-gray-100 flex flex-col justify-end items-center'>
            <h1 className="text-xl">{category.categoryName}</h1>
          </div>
          
        </SplideSlide>
            ))
    }
      </Splide>
   
   </div>
  )
}

export default Categories
