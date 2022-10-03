import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown} from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return ( 
        <>
        <div className="notFound">
        
            <h1>                
              <FontAwesomeIcon icon={faFaceFrown}  />  404 Error:</h1>
            <h1> Page Not Found</h1>
        </div>
        </>
     );
}
 
export default NotFound;