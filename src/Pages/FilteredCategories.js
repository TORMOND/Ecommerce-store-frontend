import Footer from "../Components/footer";
import NavBar from "../Components/NavBar";
import {useNavigate } from 'react-router-dom'

const FilteredCategories = () => {
    const navigate = useNavigate()
    const signInUser =()=>{
        navigate('/LoginPage')
      }
      const categories=()=>{
        
      }

    return ( 
        <div id="filtered-categories-page">
             <NavBar signInUser={signInUser}  categories={categories} />
             <Footer />
        </div>
     );
}
 
export default FilteredCategories;