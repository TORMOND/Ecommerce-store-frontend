import '../formPages.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate()
 
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleSignup = ()=> {
      navigate('/SignUpPage')
     }
    const submit = (e)=> {
     
    e.preventDefault()
 
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
           Incorrect Login Credentials
          </div>
          }
         
       <button onClick={submit} className="submit-credentials">Log in</button>
        <span onClick={forgotPassword}>forgot Password?</span>

          </form>
          </div>
        
          </div>
          
         
        </div>
        
       
        </>
     );
}
 
export default LoginPage;