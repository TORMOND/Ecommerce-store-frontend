
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ForgotPassword = () => {
  const navigate = useNavigate()
 
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2]= useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error]= useState(false)

    const submit = async(e)=> {
    e.preventDefault()

    }
    const forgotPassword = ()=>{

    }
    return ( 
        <>
        <div className="h-screen w-screen flex p-2.5 m-auto">
          <div className="bg-purple-500 m-auto overflow-hidden flex justify-start items-center w-4/5 h-4/5">

          <div className="bg-white my-0 mx-auto rounded-sm py-2.5 px-4">
          <h2></h2>
          <div className='flex items-center justify-center gap-2.5'>
          <p>Back to login</p>  
          {/* <span className='text-blue-500 cursor-pointer'>sign Up</span>      */}
            </div>

          <form className='flex my-2.5 mx-auto flex-col gap-2.5' >
          <input
         type='email'
         value={email}
         placeholder="Email"
         onChange={(e)=> setEmail(e.target.value)}
         className='w-60 outline-1 outline-purple-500 py-2.5 px-4 rounded-sm border-gray-100' 

         />
        <input
         type='password'
         value={password}
         placeholder='Password'
         onChange={(e)=> setPassword(e.target.value)}
         className='w-60 outline-1 outline-purple-500 py-2.5 px-4 rounded-sm border-gray-100' 

         />
          <input
         type='password'
         value={password2}
         placeholder='Password'
         onChange={(e)=> setPassword2(e.target.value)}
         className='w-60 outline-1 outline-purple-500 py-2.5 px-4 rounded-sm border-gray-100' 

         />
         {error &&  <div className="text-red-600 py-2.5 px-6 box-border bg-[rgb(238, 196, 196)] my-0 mx-auto">
          {error}
          </div>
          }
         
       <button onClick={submit} className="border-0 py-2.5 px-6 rounded-md bg-purple-500 w-44 text-white m-auto cursor-pointer" disabled={isLoading}>Log in</button>
        

          </form>
          </div>
        
          </div>
          
         
        </div>
        
       
        </>
     );
}
 
export default ForgotPassword;