import Footer from "../Components/footer";
import NavBar from "../Components/NavBar";
import SelectedProduct from "../Components/SelectedProduct";
import {useNavigate,  useParams } from 'react-router-dom'
import '../index.css';


const ProductPage = () => {

  const { id } = useParams()


const setId =localStorage.setItem('id', id)


    const navigate = useNavigate()
    const signInUser =()=>{
        navigate('/LoginPage')
      }
      const categories=()=>{
       
      }
    return ( 
        <>

        <NavBar signInUser={signInUser}  categories={categories} />
        <div className="AD-section">
          <p>{id}</p>
        </div>
        <SelectedProduct />
        <Footer />
        
        </>
     );
}
 
export default ProductPage;