import { useState } from 'react';
import { allCategories }from "./data/categories";
import { useNavigate } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
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
  return (
    
        <Splide  
        options={options}
        hasTrack={true}
        // className="w-full box-border p-3 bg-white text-purple-900 grid   gap-2.5 grid-cols-2  lg:grid-cols-4 "
        className='w-full flex gap-2.5 p-3'
        >
        {
            categories && categories.map((category, id)=>(
        <SplideSlide
        onClick={()=>filteredCategoryPage(category.categoryName)}
         className="cursor-pointer  bg-no-repeat bg-cover  duration-75 rounded-sm hover:shadow-xl shadow-gray-500/50 h-64 "   
         style={{backgroundImage: `url(${category.img})`}}
         key={id}>
          <div className='w-full h-full duration-75 text-puple-600 hover:bg-[#00000071] hover:text-gray-100 flex flex-col justify-center items-center  '>
            <h1 className="text-xl">{category.categoryName}</h1>
          <h3>{category.items}</h3>
          </div>
          
        </SplideSlide>
            ))
    }
      </Splide>
   
   
  )
}

export default Categories
