import '../Pages/Admin.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faArrowRightFromBracket, faGear, faMagnifyingGlassChart, faHouse, faCirclePlus} from '@fortawesome/free-solid-svg-icons';


const SideBar = ({createProject, logOut, onFileSelected, fileInput, view_products}) => {
    return ( 
        <template>
    <div className="side-bar">
                <h2>Admin Page</h2>
                <div>
                <input type="file" name="" id="" className='fileInput' onChange={onFileSelected} ref={fileInput} />
                
                 <p className='create-tab'  onClick={createProject}>
              Create Product
              <FontAwesomeIcon icon={ faCirclePlus} />
            </p>     
                </div>
                
        <ul className='sideBar-list'>
      
           <li> <Link to='/' className='Dashboard'>
            <FontAwesomeIcon icon={ faHouse} ></FontAwesomeIcon>
            <p>DashBoard</p>
                </Link></li>
            <li className='Analytics'>
            <FontAwesomeIcon icon={ faMagnifyingGlassChart} ></FontAwesomeIcon>
            <p> Analytics</p>
               </li>
               <li className='Settings' onClick={view_products}>
            {/* <FontAwesomeIcon icon={ faGear}></FontAwesomeIcon> */}
            <p>Products</p>
                </li>
              <li> 
            <Link to="/Schedule" className='calender'>
            <FontAwesomeIcon icon={faCalendarDays} ></FontAwesomeIcon>
            <p>Calender</p>
                </Link>    
            </li>

            <li className='Settings'>
            <FontAwesomeIcon icon={ faGear}></FontAwesomeIcon>
            <p>Settings</p>
                </li>

        </ul>  
        <p className='Logout' onClick={logOut}>
            <FontAwesomeIcon icon={ faArrowRightFromBracket} ></FontAwesomeIcon>
            <p>Logout</p>
                </p>
    </div>
        </template>
     );
}
 
export default SideBar;