import { useRef, useState } from 'react';
import '../Assets/Admin.css';

const AddProduct = ({closePopoup }) => {

    const cancel =()=>{
        
    }

     const [title, setTitle]  = useState(null)
     const [brands, setBrands] =useState(null)
     const [device, setDevice]= useState(null)
     const [price, setPrice] =useState(null)
     const [color, setColor] =useState(null)
     const [details, setDetails] =useState(null)
    
     const rating = 0;
     const popularity = 0;

     const img = localStorage.getItem('selectedImage')
     const product_details = {img, title, brands, device, price, color, details, rating, popularity}


          // Adding new products
    const sendProduct = async()=>{
      
        fetch('http://localhost:4000/api/Products',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(product_details)
      }).then(()=>{
        alert("New Product Added")
        // setisPending(false)
        // setError(false)
      })
      .catch((error)=>{
        console.log(error.message)
        // setError(true)
      })
    
    }

    return (      
        <div class="onPicLoad">
            <div className="top-part">
 <button onClick={closePopoup}>X</button>
            </div>

<img src={img} alt={img} />
<div className="product-input-infor">
    
<form action="">
     
    <input
     type="text"
      placeholder='Product Name' 
      value={title}
       onChange={e=>setTitle(e.target.value)}
        />
    <input
     type="text" 
     placeholder='Brand'
      value={brands}
      onChange={e=>setBrands(e.target.value)}
       />
    <input
     type="text"
      placeholder='Category' 
      value={device} 
      onChange={e=>setDevice(e.target.value)}
      />
    <input
     type="number" 
     placeholder='price'
     value={price}
      onChange={e=>setPrice(e.target.value)}
       />
    <input
     type="text" 
     placeholder='color'
      value={color}
      onChange={e=>setColor(e.target.value)}
       />
    <input 
    type="text" 
     placeholder='product details'
     value={details}
      onChange={e=>setDetails(e.target.value)} />
</form>

</div>

<div class="manouver-btns">
<button onClick={cancel}>Cancel</button>
<button onClick={sendProduct}>Submit</button>    
</div>


</div>
        
     );
}
 
export default AddProduct;