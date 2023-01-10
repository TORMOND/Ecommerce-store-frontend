import '../Assets/formPages.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useLogin} from '../Hooks/useLogin'

const LoginPage = () => {
  const navigate = useNavigate()
 
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login, error, isLoading} = useLogin();
    const handleSignup = ()=> {
      navigate('/SignUpPage')
     }
    const submit = async(e)=> {
    e.preventDefault()
    await login(email, password)
    }
    const forgotPassword = ()=>{

    }
    return ( 
        <>
        <div className="loginPage">
          <div className="login-section">

          <div className="login-form">
          <h2>Welcome Back</h2>
          <div className='user-login'>
          <p>Dont have an account?</p>  
          <span onClick={handleSignup}>sign Up</span>     
            </div>

          <form >
          <input
         type='email'
         value={email}
         placeholder="Email"
         onChange={(e)=> setEmail(e.target.value)}
         />
        <input
         type='password'
         value={password}
         placeholder='Password'
         onChange={(e)=> setPassword(e.target.value)}
         />
         {error &&  <div className="login-error">
          {error}
          </div>
          }
         
       <button onClick={submit} className="submit-credentials" disabled={isLoading}>Log in</button>
        <span onClick={forgotPassword}>forgot Password?</span>

          </form>
          </div>
        
          </div>
          
         
        </div>
        
       
        </>
     );
}
 
export default LoginPage;