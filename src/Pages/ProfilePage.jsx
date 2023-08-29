import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping, faCaretDown, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
const ProfilePage = () => {
  const {user} = useAuthContext();
  const logout = useLogout();

  return (
    <div className='flex w-full'>
      {user &&
      <div className=' max-w-7xl mx-auto'>
      <div className=''>
      <div className='w-20 h-20 rounded-full p-1 '>

        {user.user.profile?
         <div  className="w-40 h-40 rounded-full flex bg-gray-500 " ><FontAwesomeIcon icon={faUser} size="lg" className='m-auto' /></div>:
         <img src={user.user.profile} alt={user.user.profile} className='w-full h-full rounded-full' />
        }
       
      </div>
      </div>
      <div className='mt-2  max-w-7xl mx-auto'>
      <div className='flex flex-col gap-2.5 text-start'>
        <p className='font-semibold'>{user.user.firstName} {user.user.secondName}</p>
        <p className=''>{user.user.email}</p>
        {/* <p className='font-semibold'>{user.user.country}</p>
        <p className=''>{user.user.phoneNumber}</p>
        <p className=''>{user.user.postalCode}</p> */}
        {/* <p>Logout</p> */}
      </div>
      
      
      </div>
    </div>
      }
    
    </div>
  )
}

export default ProfilePage
