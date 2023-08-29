import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
import { backend } from "../components/data/url";

export const useSignUp = ()=>{
    const [ error, setError] = useState(null)
    const [ isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext();
    const navigate = useNavigate()

    const signup = async (email, password, firstName, secondName)=>{
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${backend}/user/signup`, {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email, password, firstName, secondName, profile:null, role:'client'})
        })

        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)    
        }
        if(response.ok){
            //save  user to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type:'LOGIN', payload:json})
            setIsLoading(false)
            navigate('/LoginPage')
        }
    }
    return { signup, isLoading, error }
}