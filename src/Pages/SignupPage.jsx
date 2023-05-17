// import '../Assets/formPages.css'
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../Hooks/useSignup';

const SignUpPage = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const {signup, error, isLoading} = useSignUp();
    
  
   const navigate = useNavigate()
   
   const handleLogin = ()=> {
    navigate('/LoginPage')
   }
  
    const submit = async(e)=>{
        e.preventDefault();
        await signup(email, password, firstName, secondName)
    }
    return ( 

        <div className="h-screen flex bg-cover">
            <div className="bg-purple-500 m-auto overflow-hidden flex justify-center items-center w-4/5 h-4/5">

     <div className="bg-white my-0 mx-auto rounded-sm py-2.5 px-4">    

            <h4 className="mx-auto">START FOR FREE</h4>
            <h2 className="mx-auto">Create new account</h2>
            <div className='flex items-center justify-start gap-2.5'>
          <p>Already a member?</p>  
          <span onClick={handleLogin}  className='text-blue-500 cursor-pointer'>sign in</span>     
            </div>
           
          <form onSubmit={submit} className='flex my-2.5 mx-auto flex-col gap-2.5'>
            <div className='nameInputs'>
                <input
                 type="text"
                 value={firstName}
                 placeholder='first name'
                 onChange={(e)=> setFirstName(e.target.value)}
                 className="outline-purple-500 py-2.5 px-4 rounded-sm border-gray-200"
                 />
                <input
                 type="text"
                 value={secondName}
                 placeholder='sir name'
                 onChange={(e)=> setSecondName(e.target.value)}
                 className="outline-purple-500 py-2.5 px-4 rounded-sm border-gray-200"
                 />
            </div>
            <div className='input-credentials'>
                <input
                type='email'
                value={email}
                placeholder='email'
                onChange={(e)=> setEmail(e.target.value)}
                className='w-60 outline-1 outline-purple-500 py-2.5 px-4 rounded-sm border-gray-100'
               />
                <input
                 type='password'
                 value={password}
                 placeholder='password'
                 onChange={(e)=> setPassword(e.target.value)}
                 className='w-60 outline-1 outline-purple-500 py-2.5 px-4 rounded-sm border-gray-100'
                />
            </div>
            {error && <div  className="text-red-600 py-2.5 px-6 box-border bg-[rgb(238, 196, 196)] my-0 mx-auto">
           {error}
          </div>
            }
            
            <div className="flex gap-2.5 align-center">
               <input type="checkbox" />  <p>Agree to Terms & Conditions</p>
            </div>
           
            <div className='w-full'>
                <button  className="border-0 py-2.5 px-6 rounded-md bg-purple-500 w-44 text-white m-auto" disabled={isLoading}>Create account</button>
            </div>

        </form>       
           </div>
        
            </div>
            
        </div>
       

     );
}
 
export default SignUpPage;