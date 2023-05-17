// import '../Assets/index.css';
import Loading from './Loading';

//Custom Template
import useFetch from '../UseFetch';

const ProductsReview = ({runSetProducts}) => {
     const {data:products, isPending, error} = useFetch('http://localhost:4000/api/products/')
   
   const selectProduct = (id)=>{
      const selectedProduct  = localStorage.setItem('selectedProduct', id)
      console.log(selectedProduct)
      console.log(id)
      runSetProducts()
    }
    
    return ( 
        <div id="products-review">
           
  <div className="products-section">
  {isPending &&              
         <Loading />        
                  }
               {error &&       
             <Loading />
               }

 <div className="new-Arrivals">
               {products && products.filter((product)=>product.device ==="mobile").map((product)=> (
                  
                  <div className="product"  key={product._id} onClick={()=>selectProduct( product._id)}>
                     
                  <div className="product-image">
                   <img src={product.img} alt={product.title} />  
                  </div> 
                  <div className="product-infor">
                  <p>{product.title}</p>

                  <span>${product.price}</span>
                  
                  </div>
                  
               </div>
               ))}
               
            
            </div>
            
            <div className="top-sellers">
            {products && products.filter((product)=> product.device ==="PC").map((product)=> (
            
                  <div className="product" key={product._id} onClick={()=>selectProduct( product._id)}>
         
                  <div className="product-image">
                   <img src={product.img} alt={product.img} />  
                  </div> 
                  <div className="product-infor">
                  <p className='Product-title'>{product.title}</p>

                  <span>${product.price}</span>
                  
                  </div>
 
               </div>
            
               ))}   
               
            </div>
 
           
 
        </div>
        </div>
     );
}
 
export default ProductsReview;