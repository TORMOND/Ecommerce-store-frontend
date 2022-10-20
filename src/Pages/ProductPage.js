import Footer from "../Components/footer";
import NavBar from "../Components/NavBar";
import SelectedProduct from "../Components/SelectedProduct";
import { useNavigate,  useParams } from 'react-router-dom';
// import React, { useState, useEffect } from "react";
import '../index.css';

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "../Components/stripeCheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
/* This is the test API key. */
// Sign in to see your own test API key embedded in code samples.
// const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProductPage = () => {

    const { id } = useParams()
    const setId =localStorage.setItem('id', id)
    const navigate = useNavigate()

    console.log(id)

    
    // const [clientSecret, setClientSecret] = useState("");

    // useEffect(() => {
    //   // Create PaymentIntent as soon as the page loads
    //   fetch("http://localhost:4000/api/payment/create-payment-intent", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ items: [{id}] }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setClientSecret(data.clientSecret));
    // }, []);
  
    // const appearance = {
    //   theme: 'stripe',
    // };
    // const options = {
    //   clientSecret,
    //   appearance,
    // };
  
    const signInUser =()=>{
        navigate('/LoginPage')
      }
      const categories=()=>{
       
      }
      const initiatePayment= async()=>{
        const response = await fetch('http://localhost:4000/api/payment/create-payment-intent', {
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify()
      })
      if(!response.ok){

      }
      }
    return ( 
        <>

        <NavBar signInUser={signInUser}  categories={categories} />
        <div className="AD-section">
          <p>{id}</p>
        </div>
        <SelectedProduct initiatePayment={initiatePayment}/>

        {/* {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )} */}
        <Footer />
        
        </>
     );
}
 
export default ProductPage;