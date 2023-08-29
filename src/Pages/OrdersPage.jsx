import { useState, useEffect,  useContext} from 'react';
import { OrdersContext } from "../Context/OrdersContext";
import { backend } from "../components/data/url";
import { useAuthContext } from '../Hooks/useAuthContext';


const OrdersPage = () => {
const {user} = useAuthContext();
const orders= useContext(OrdersContext);
const id = orders.items.length-1;

const [data, setData] = useState(null);

    const [isPending, setPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        fetch(`${backend}/payment/order/success/${id}`)
        .then((res)=>{
         if(!res.ok){
            throw Error('Could not fetch the data ');
         }
          return res.json();
        }).then(data=> {    
          setData(data);
          setPending(false)
          
        })
        .catch(error=> {
          setPending(false)
          setError(error.message)
        })

      }, []);
console.log(data)
  return (
    <div className=''>
       <div className='max-w-7xl min-h-screen flex'>
      <h4 className='text-gray-500 m-auto'>No Orders made: Orders Appear when you make a purchase.</h4>
      </div>
    </div>
  )
}

export default OrdersPage;
