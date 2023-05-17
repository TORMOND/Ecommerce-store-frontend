import { useEffect, useState } from "react";
import { useCartsContext } from "../Hooks/UseCartContext";

const FetchCarts = () => {
    const { dispatch } = useCartsContext()
      const [items] = useState(JSON.parse(localStorage.getItem('items')) || []);
      console.log(items)
      console.log(items.length > 0)
      const [newItems, setNewItems] = useState(null)
      let [ new_sum, setNewSum ] = useState(0)
  
  useEffect(()=>{
  setNewItems(items)
  if(items.length > 0){
    dispatch({type:'SET_CARTS', payload: items})
    const sum = items.map(n=> n.price).reduce((a, b)=> a + b)
    setNewSum(sum)
  }

    }, [])
    return { newItems, new_sum };
}
 
export default FetchCarts;