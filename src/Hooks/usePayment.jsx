import { useState } from "react";
// import { useAuthContext } from './useAuthContext'
// import { useNavigate } from 'react-router-dom';

export const usePayment = ()=>{
    const [ error, setError] = useState(null)
    const [ isLoading, setIsLoading] = useState(null)
    // const { dispatch } = useAuthContext();
    // const navigate = useNavigate()

    const pay = async (userId, amount, productId)=>{
        setError(null)
        setIsLoading(true)

        const response = await fetch('https://besk-merchants.netlify.app/.netlify/functions/api/api/payment/create-payment-intent', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId, amount, productId})
        })

        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)    
        }
        if(response.ok){

            setIsLoading(false)
            // navigate('/LoginPage')
        }
    }
    return { pay, isLoading, error }
}