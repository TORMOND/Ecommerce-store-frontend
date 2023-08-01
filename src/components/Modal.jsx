import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import { useContext } from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Modal = ({toggleSearch})=>{
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
                duration:30
            }
        }
    }

    const navigate = useNavigate();

    const selectProduct = (event, id)=>{
     localStorage.setItem('id', id)
     navigate(`/ProductPage/${id}`)
    }
   
const [searchCustomerDetails, setSearchCustomerDetails] = useState(''); 
    const prodContext = useContext(ProductsContext);
    const x = prodContext.items;
    console.log(x);

    
    const handleSearch = x.filter(purchase=>   
        Object.values(purchase).join('').toLowerCase().trim().includes(searchCustomerDetails)
        )
        
    const purchasesToDisplay = searchCustomerDetails ? handleSearch : x;  

    return(
        <motion.div
         variants= {containerVariants}
         initial='hidden'
         animate='visible'
         className='w-screen bg-[#00000071] fixed z-20 h-screen flex justify-center items-center box-border'
         >
            <motion.div
             varaints= {boxVariants}
             initial='hidden'
             animate='visible'
             className='rounded-lg flex flex-col p-2 bg-gray-50 w-[80%]  min-h-2/5 lg:w-[60%]'
             >
                <div className='w-full p-2 flex gap-2.5 justify-between items-center border-b border-b-gray-300'>
                <div  className=' text-start px-2 flex gap-1.5 items-center w-5/6'>
                <FontAwesomeIcon icon={faMagnifyingGlass}  className="" />
                    <input 
                    type='text' 

                    className='border-0 w-full py-1 px-2 bg-gray-50 focus:outline-0'
                    value={searchCustomerDetails}
                    placeholder='search'
                    onChange={e=>setSearchCustomerDetails(e.target.value.toLocaleLowerCase())}
                    />
                </div>
                    <button onClick={toggleSearch} className='border border-gray-300 rounded-sm py-1 px-1.5'>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </div>
                <div className='max-h-[80vh] overflow-y-scroll'>

                {searchCustomerDetails && purchasesToDisplay.map((purchase)=>(
                <div className="flex gap-2.5 py-1.5 px-2.5 duration-75 cursor-pointer hover:shadow-md" key={purchase._id} 
                onClick={event=>selectProduct(event, purchase._id)}>
                
                    <div className="customer-name">{purchase.title}</div>
                    <div className="other-purchase-details">
                    <div className="text-gray-400">{purchase.device}</div>
                    </div>
                   
                </div>
                         ))}
                         {purchasesToDisplay &&
                         <h2 className='m-auto text-gray-400'>
                           
                            {purchasesToDisplay===undefined &&
                            <div>
                                No Product found 
                            </div>
                            }
                            </h2>
                         }


                </div>
            </motion.div>
        </motion.div>
    )
}

export default Modal;