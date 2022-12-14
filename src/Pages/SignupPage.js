import '../Assets/formPages.css'
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

        <div className="signupPage">
            <div className="signup-section">

     <div className="signup-form">    

            <h4>START FOR FREE</h4>
            <h2>Create new account</h2>
            <div className='user-login'>
          <p>Already a member?</p>  
          <span onClick={handleLogin}>sign in</span>     
            </div>
           
          <form onSubmit={submit}>
            <div className='nameInputs'>
                <input
                 type="text"
                 value={firstName}
                 placeholder='first name'
                 onChange={(e)=> setFirstName(e.target.value)}
                 />
                <input
                 type="text"
                 value={secondName}
                 placeholder='sir name'
                 onChange={(e)=> setSecondName(e.target.value)}
                 />
            </div>
            <div className='input-credentials'>
                <input
                type='email'
                value={email}
                placeholder='email'
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                 type='password'
                 value={password}
                 placeholder='password'
                 onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            {error && <div className="signup-error">
           {error}
          </div>
            }
            
            <div className="terms">
               <input type="checkbox" />  <p>Agree to Terms & Conditions</p>
            </div>
           
            <div className='btn'>
                <button className='submit-credentials' disabled={isLoading}>Create account</button>
            </div>

        </form>       
           </div>
        
            </div>
            
        </div>
       

     );
}
 
export default SignUpPage;