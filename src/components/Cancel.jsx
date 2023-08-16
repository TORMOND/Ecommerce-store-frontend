import { motion } from 'framer-motion';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

const Cancel = ({toggleCancel}) => {
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
  return (
    <motion.div
    variants= {containerVariants}
    initial='hidden'
    animate='visible'
    className='w-screen bg-[#00000071] fixed z-20 h-screen flex justify-center lg:items-center box-border'
    >
       <motion.div
        variants= {boxVariants}
        initial='hidden'
        animate='visible'
        className={`rounded-lg flex flex-col p-2 bg-gray-50 w-[80%]  min-h-2/5 lg:w-[60%] `}
        >
           <div className='w-full p-2 flex gap-2.5 justify-end items-center border-b border-b-gray-300'>
           <div  className=' text-start px-2 flex gap-1.5 items-center w-5/6'>                   
           </div>
               <button onClick={toggleCancel} className='border border-gray-300 rounded-sm py-1 px-1.5'>
               <FontAwesomeIcon icon={faXmark} size="lg" />
               </button>
           </div>
           <div className='h-[30vh] flex items-center justify-center'>
             <h3>Payment Canceled.</h3>
           </div>
       </motion.div>
   </motion.div>
  )
}

// export default SectionWrapper(Cancel, "cancel");
export default Cancel
