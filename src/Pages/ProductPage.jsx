import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import SelectedProduct from "../components/SelectedProduct";
import { useNavigate,  useParams } from 'react-router-dom';
import{ useEffect } from "react";

const ProductPage = () => {

    const { id } = useParams()
    // const setId =localStorage.setItem('id', id)
    const navigate = useNavigate()

    console.log(id)

    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
   
  
    const signInUser =()=>{
        navigate('/LoginPage')
      }
      const categories=()=>{
       
      }
   
    return ( 
        <>

        <NavBar signInUser={signInUser}  categories={categories} />
        <div className="w-full h-16 bg-white border border-b-gray-300">

        </div>
        <SelectedProduct />

       
        <Footer />
        
        </>
     );
}
 
export default ProductPage;