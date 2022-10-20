import { useRef } from 'react';
import '../Pages/Admin.css';

const AddProduct = ({cancel, submit, closePopoup}) => {

     const imageUrl = localStorage.getItem('selectedImage')
     const productTitle = useRef()
     const brand = useRef()
     const category= useRef()
     const price = useRef()



    return (      
        <div class="onPicLoad">
            <div className="top-part">
 <button onClick={closePopoup}>X</button>
            </div>

<img src={imageUrl} alt={imageUrl} />
<div className="product-input-infor">
    
<form action="">
     
    <input type="text" placeholder='Product Name' ref={productTitle} />
    <input type="text" placeholder='Brand' ref={brand} />
    <input type="text" placeholder='Category' ref={category} />
    <input type="number" placeholder='price' ref={price} />

</form>

</div>

<div class="manouver-btns">
<button onClick={cancel}>Cancel</button>
<button onClick={submit}>Submit</button>    
</div>


</div>
        
     );
}
 
export default AddProduct;