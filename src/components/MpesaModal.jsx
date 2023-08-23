import { motion } from 'framer-motion';
import { useState } from 'react';


// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { backend } from './data/url';

const MpesaModal = ({toggleMpesa, amount, items, KES}) => {

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

const [phone, setCustomerPhone] = useState(''); 
const [loading, setLoading]= useState(false);
const [error, setError]= useState(false)
const [success, setSuccess] = useState(false);
const [city,setCity] = useState('');
const [postalCode,setPostalCode] = useState('');
const [streetAddress,setStreetAddress] = useState('');
const [country,setCountry] = useState('');

console.log(items)
let categories = [] 
const findCategories =(products)=>{

for(let i =0; i< products.length; i++){
   categories.push(products[i]._id)
}
const y = Array.from(new Set(categories))
return y
}


const itemIds = items? findCategories(items): []

let prods = []
const findProducts =(products)=>{
  for(let i =0; i< products.length; i++){
    prods.push(products[i].title)
 }
 const newProducts = Array.from(new Set(categories))
 return newProducts
}

const itemTitles = items? findProducts(items): []

console.log(itemIds)
const makepayment =async()=>{
  setLoading(true)
  const response = await fetch(`${backend}/mpesaPayment/stk/`, {
    method: 'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({phone, itemIds,items, itemTitles, KES})
})

// const json = await response.json()
if(!response.ok){
    setLoading(false)
    setError(true)
}
if(response.ok){
  setLoading(false)
  setError(false)
  setSuccess(true)

}
}

  return (
    <div className="">
      <motion.div
         variants={containerVariants}
         initial='hidden'
         animate='visible'
         className='w-screen bg-[#00000071] fixed z-20 h-screen flex justify-center items-center box-border'
         >
          {success && 

<div className='flex items-center justify-center rounded-lg flex-col p-2 bg-gray-50 w-[80%]  min-h-2/5 lg:w-[60%] pb-5'>
<div className='w-full p-2 flex gap-2.5 justify-end items-center border-b border-b-gray-300'>
                    <button onClick={toggleMpesa} className='border border-gray-300 rounded-sm py-1 px-1.5'>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </div>
<p>Thank you for shopping with Us we shall contact  you via message  on about the product delivery</p>
</div>
}
            
            {!success &&<motion.div
             variants= {boxVariants}
             initial='hidden'
             animate='visible'
             className='rounded-lg flex flex-col p-2 bg-gray-50 w-[80%]  min-h-2/5 lg:w-[60%] pb-5'
             >

                <div className='w-full p-2 flex gap-2.5 justify-between items-center border-b border-b-gray-300'>
                   <div className="mx-auto">
                  <h2>Pay Ksh{amount}</h2>
                </div>
                    <button onClick={toggleMpesa} className='border border-gray-300 rounded-sm py-1 px-1.5'>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </div>
                <div className="flex flex-col gap-2 mt-4 px-2">
                  <h4>Fill in the following details:</h4>
                <input type="text"
                       placeholder="City"
                       value={city}
                       name="city"
                       onChange={ev => setCity(ev.target.value)}
                       className="outline outline-gray-400 p-2 max-w-4xl"
                       required 
                       />
                <input type="text"
                       placeholder="Postal Code"
                       value={postalCode}
                       name="postalCode"
                       onChange={ev => setPostalCode(ev.target.value)}
                       className="outline outline-gray-400 p-2"
                       required 
                       />
              <input type="text"
                     placeholder="Street Address"
                     value={streetAddress}
                     name="streetAddress"
                     onChange={ev => setStreetAddress(ev.target.value)}
                     className="outline outline-gray-400 p-2"
                     required 
                     />
              <input type="text"
                     placeholder="Country"
                     value={country}
                     name="country"
                     onChange={ev => setCountry(ev.target.value)}
                     className="outline outline-gray-400 p-2"
                     required 
                     />
 </div>
                <div  className='text-start px-2 flex flex-col  gap-1.5 items-center w-full py-5  justify-center'>
                    <p className='text-start w-full'>Enter Phone Number:</p>
                    <input 
                    type='text' 
                    className='border-0 outline outline-gray-400 w-full py-1 px-2 rounded-sm mx-auto bg-gray-50 focus:outline-green-600 focus:outline-2'
                    value={phone}
                    required
                    placeholder='Phone Number: eg 07000000000'
                    onChange={e=>setCustomerPhone(e.target.value.toLocaleLowerCase())}
                    />
                </div>
                <div className='flex justify-center items-center'>

                <button onClick={()=>makepayment(amount)} 
              className='before:absolute before:-ml-12  before:transition-[width] before:top-0 before:w-0 before:h-full before:bg-green-500 before:skew-x-45 before:z-[-1] before:duration-1000  overflow-hidden relative    cursor-pointer p-2 flex justify-center w-96 rounded-sm  duration-1000 border-0 transition-all  text-green-500 outline outline-offset-2 outline-green-500 box-border hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-400  hover:before:w-80 '>
{!loading? ' Pay with Mpesa':
 <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
 </svg>
 
}
                  </button>


                </div>
            </motion.div>
}
        </motion.div>

    </div>
  )
}

export default MpesaModal
