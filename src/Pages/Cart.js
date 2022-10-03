// import useFetch from '../UseFetch'
import Footer from "../Components/footer";
import NavBar from "../Components/NavBar";
import {useNavigate } from 'react-router-dom'
import '../index.css';

const Cart = () => {
    // const {data:product, isLoading, error} = useFetch('http://localhost:4000/api/products/cart')
    const navigate = useNavigate()
    const signInUser =()=>{
        navigate('/LoginPage')
      }
      const categories=()=>{
        
      }
    return ( 
        <div className="cart-page">
 <NavBar signInUser={signInUser}  categories={categories} />
        <div className="AD-section">
          {/* <p>{id}</p> */}
        </div>
       
        <Footer />
        </div>
     );
}
 
export default Cart;