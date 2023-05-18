// import { useRef} from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping, faCalendarDays, faArrowRightFromBracket, faGear, faMagnifyingGlassChart, faHouse, faCirclePlus} from '@fortawesome/free-solid-svg-icons';


const SideBar = ({ logOut, viewAnalytics, view_products,setShow, dashboard}) => {
    // const { logOut, viewAnalytics, view_products, setShow, dashboard } = props;
   
    return ( 
        <template>
    <div className="py-5 px-4 h-screen box-border shadow-lg shadow-gray-300">
                <h2>Admin Page</h2>
              
                
        <ul className='flex flex-col justify-center my-5 p-0 h-5/6'>
      
           <li onClick={dashboard}> <Link to='/AdminPage' className='flex gap-2.5 items-center  decoration-none sideBar-list' >
            <FontAwesomeIcon icon={ faHouse} ></FontAwesomeIcon>
            <p>DashBoard</p>
                </Link></li>
            <li className='Analytics sideBar-list' onClick={viewAnalytics}>
            <FontAwesomeIcon icon={ faMagnifyingGlassChart} ></FontAwesomeIcon>
            <p> Analytics</p>
               </li>
               <li className='Settings sideBar-list' onClick={view_products}>
            <FontAwesomeIcon icon={ faCartShopping}></FontAwesomeIcon>
            <p>Products</p>
                </li>
              <li> 
            <Link to="/Schedule" className='calender sideBar-list'>
            <FontAwesomeIcon icon={faCalendarDays} ></FontAwesomeIcon>
            <p>Calender</p>
                </Link>    
            </li>

            <li className='Settings sideBar-list'>
            <FontAwesomeIcon icon={ faGear}></FontAwesomeIcon>
            <p>Settings</p>
                </li>

        </ul>  
        <p className='p-2.5 cursor-pointer flex items-center list-none text-start  sideBar-list' onClick={logOut}>
            <FontAwesomeIcon icon={ faArrowRightFromBracket} ></FontAwesomeIcon>
            Logout
                </p>
    </div>
        </template>
     );
}
 
export default SideBar;