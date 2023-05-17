import { useState, useEffect } from 'react';


const useFetch = (url) => {
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const[error, setError] = useState(null)
    

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
         if(!res.ok){
            throw Error('Could not fetch the data ');
         }
          return res.json();
        }).then(data=> {    
          setData(data);
          setPending(false)
          console.log(data)
        })
        .catch(error=> {
          setPending(false)
          setError(error.message)
          console.log(error)
        })
        
      }, [url]);

  return {data, error, isPending, setData}
}
 
export default useFetch;