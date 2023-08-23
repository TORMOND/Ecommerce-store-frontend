import { useState, useEffect,  useContext} from 'react';
import { OrdersContext } from "../Context/OrdersContext";
import { backend } from "../components/data/url";

const OrdersPage = () => {

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
    <div>
      
    </div>
  )
}

export default OrdersPage;
