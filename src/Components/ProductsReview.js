import '../Assets/index.css';
import useFetch from '../UseFetch';


const ProductsReview = () => {
     const {data:products, isPending, error} = useFetch('http://localhost:4000/api/products/')

   
     const selectProduct = (event, id)=>{
    
      console.log(event)
      console.log(id)
     }
    return ( 
        <div id="products-review">
  <div className="products-section">

 <div className="new-Arrivals">
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
                  
                  <div className="product"  key={product._id} onClick={event=>selectProduct(event, product._id)}>
                   

                  <div className="product-image">
                   <img src={product.img} alt={product.title} />  
                  </div> 
                  <div className="product-infor">
                  <p>{product.title}</p>
                  <div className="rating">
                
                  <p>123</p>
                  </div>
                  

                  <span>${product.price}</span>
                  <div className="btn">
                  <button className='view-product'>view product</button>   
                  </div>
                  
                  </div>
              
               </div>
               ))}
               
            
            </div>
            
            <div className="top-sellers">
            {products && products.filter((product)=> product.device ==="PC").map((product)=> (
            
                  <div className="product" key={product._id} onClick={event=>selectProduct(event, product._id)}>
         
                  <div className="product-image">
                   <img src={product.img} alt={product.img} />  
                  </div> 
                  <div className="product-infor">
                  <p className='Product-title'>{product.title}</p>

                  <span>${product.price}</span>
                  <div className="btn">
                  <button className='view-product'>view product</button>   
                  </div>
                  
                  </div>
 
               </div>
            
               ))}   
               
            </div>
 
           
 
        </div>
        </div>
     );
}
 
export default ProductsReview;