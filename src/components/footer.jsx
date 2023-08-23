import { useNavigate } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { mastercard, visacard,  MPESA} from '../assets';
const Footer = () => {
    const navigate = useNavigate()
    const generateForm=()=>{
        navigate('/contactUs');
    }
    return ( 
        <div className="w-full bg-white box-border mt-2.5  flex flex-col">
             <div className='w-full text-center p-4 border-b border-b-gray-300 flex flex-col justify-center'>
  <h2>Can`t Find What your Looking For ?</h2>
  <p>Contact us & we can find what your looking for & send you a notification</p>
  <div className='w-full flex justify-center'>
      <button onClick={generateForm}
  className='mt-4  font-bold before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-56  rounded-sm  duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '
 >Contact Us</button>
  </div>

</div>
            <div className="flex flex-col gap-2">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full h-64 p-5 max-w-7xl mx-auto">
             <div>
                    <h2>BESK MERCHANTS</h2>
                    <div>

                    </div>
                    <div>
                        <p className='font-semibold py-1'><FontAwesomeIcon icon={faEnvelope} size="lg" /> beskmerchants@gmail.com</p>
                        {/* <p className='font-semibold py-1'><FontAwesomeIcon icon={faPhone} size="lg" /> +254 700 612 1</p> */}
                        <p className='font-semibold py-1'><FontAwesomeIcon icon={faPhone} size="lg" /> +254 765 383 877</p>
                        <p className='font-semibold py-1'><FontAwesomeIcon icon={faPhone} size="xl" /> +254 736 997 327</p>
                    <div className='p-4 flex gap-2 justify-start items-center'>
                        <div className='w-8 h-8 rounded-full border-2 cursor-pointer border-gray-500 duration-75 flex justify-center items-center text-gray-500 hover:text-blue-500 hover:border-blue-500'>
                            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                        </div>
                        <div className='w-8 h-8 rounded-full border-2 cursor-pointer border-gray-500 duration-75 flex justify-center items-center text-gray-500 hover:text-blue-500 hover:border-blue-500'>
                            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                        </div>
                        <div className='w-8 h-8 rounded-full border-2 cursor-pointer border-gray-500 duration-75 flex justify-center items-center text-gray-500 hover:text-blue-500 hover:border-blue-500'>
                            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                        </div>
                    </div>
                    </div>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 ">
                <div>
                    <h3>COMPANY</h3>
                    <div>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Customers</li>
                            <li>Leadership</li>
                        </ul>
                    </div>
                </div>
                <div>
                <h3>COMPANY</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Return Policy</li>
                            <li>Nairobi Kenya</li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                    <h3>HELP</h3>
                        <ul>
                            <li>Customer Service</li>
                            <li>Legal & Privacy</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
             </div>
</div>

            </div>
       <div className="w-full flex flex-col md:flex-row justify-between p-4 max-w-7xl mt-[240px] md:mt-2  mx-auto items-center">
            <h4>@ Copyright:2023 BESK MERCHANTS </h4>
            <div className="flex flex-col md:flex-row gap-2.5 font-semibold text-gray-500 items-center">
                <p>Privacy Policy | Terms & Conditions </p>
                <div className='flex gap-2 items-center'>
                    <img src={mastercard} alt={mastercard} />
                    <img src={visacard} alt={visacard} className='h-16 md:h-20' />
                    <img src={MPESA} alt={MPESA} className='h-6 md:h-8' />
                </div>
            </div>
            </div>     
            
        </div>
     );
}
 
export default Footer;