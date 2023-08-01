import  { useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideIn } from "../components/utils/motion";
import { NavBar } from '../components';

const Contacts = () => {

    const styles = {
        paddingX: "sm:px-16 px-6",
        paddingY: "sm:py-16 py-6",
        padding: "sm:px-16 px-6 sm:py-16 py-10",
      
        heroHeadText:
          "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
        heroSubText:
          "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",  
        sectionHeadText:
          "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
        sectionSubText:
          "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
      };

  const formRef = useRef();
  const [userName, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [details, setDetails] =useState(null);
  const [phoneNo, setphoneNo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('https://besk-merchants.netlify.app/.netlify/functions/api/api/Feedback/postFeedback',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({userName, email, details, phoneNo})
  })

  const json = await response.json()
  if(!response.ok){
    setLoading(false)
    setError(true)
  }
  if(response.ok){
      setLoading(false)
      console.log(json)
      setSuccess(true)
  }

  };

  return (
    <div
      className={`xl:mt-16 flex xl:flex-col xs:flex-row justify-center flex-col-reverse gap-10  bg-purple-700 w-full`}
    >
      <NavBar />
      {success && 
<div className='flex items-center justify-center '>
<p>Thank you for your feedback. We shall review your messsage and notify you on the result</p>
</div>
}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <div className="grid grid-cols-1 gap-2.5 w-full lg:grid-cols-2">
            <input
              type='text'
              name='name'
              value={userName}
              onChange={(e)=> setName(e.target.value)} 
              placeholder="What's your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
           
            </div>
           
             
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <div className="grid grid-cols-1 gap-2.5 w-full lg:grid-cols-2">
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
             <input
              type='number'
              name='number'
              value={phoneNo}
              onChange={(e)=> setphoneNo(e.target.value)}
              placeholder="Phone Number ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </div>
          
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={details}
              required
              onChange={(e)=> setDetails(e.target.value)}
              placeholder='What product are you looking for?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {!loading? ' Send':
            <div>
 <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
 </svg>
 Sending ...
 </div>
}
            {error && <div className="text-red-500 font-bold ">Error:Unable to send feedback, try again</div>}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default Contacts;
