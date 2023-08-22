import { motion } from 'framer-motion';


// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { backend } from './data/url';

const PaymentSummary = ({togglePaymentSummary}) => {
    const containerVariants={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                type:'spring',
                delay:0.5
            }
        }
    }
    const boxVariants={
        hidden:{
            opacity:0,
            y:'-100vw'
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                delay:0.5,
                duration:2
            }
        }
    }
   const mpesaPay=()=>{

   }
    const makePayment = (stripeId)=>{
        const body ={
          id:stripeId,
          quantity:quantity,
          // city,postalCode,streetAddress,country,
        }
        const headers ={
          "Content-Type": "application/json"
        }
        return fetch(`${backend}/payment/create-payment-intent-trial`,{
          method:"POST",
          headers,
          body:JSON.stringify(body)
        }).then((response) => {
          return response.json();
      }).then((response) => {
          if(response.url) {
              window.location.assign(response.url); // Forwarding user to Stripe
          }
        
      }).catch(error=>{
          console.log(error)
        })
       }
    
  return (
    <div>
       <motion.div
         variants={containerVariants}
         initial='hidden'
         animate='visible'
         className='w-screen bg-[#00000071] fixed z-20 h-screen flex justify-center items-center box-border'
         >
            
         <motion.div
             variants= {boxVariants}
             initial='hidden'
             animate='visible'
             className='rounded-lg flex flex-col p-2 bg-gray-50 w-[80%]  min-h-2/5 lg:w-[60%] pb-5'
             >
<div className='flex items-center justify-center rounded-lg flex-col p-2 bg-gray-50 w-[80%]  min-h-2/5 lg:w-[60%] pb-5'>
<div className='w-full p-2 flex gap-2.5 justify-end items-center border-b border-b-gray-300'>
                    <button onClick={togglePaymentSummary} className='border border-gray-300 rounded-sm py-1 px-1.5'>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </div>
                <div className=''>
                <button onClick={()=>makePayment()} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-purple-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-purple-500 outline outline-offset-2 outline-purple-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400  hover:before:w-80 '>
        Pay with card
   </button>
<div className="">
  <button onClick={mpesaPay} 
   className='before:absolute before:-ml-12 before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-green-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-full rounded-sm  duration-1000 border-0 transition-all  text-green-500 outline outline-offset-2 outline-green-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-400  hover:before:w-80 '
   >
    Pay with Mpesa
   </button>
</div>
                </div>
</div>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default PaymentSummary
