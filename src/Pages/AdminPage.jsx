import {  useRef, useState } from 'react';

import { SideBar, AddProduct, Purchases, ProductsReview, ViewProducts, Analytics, CreateProduct } from '../components';

const AdminPage = () => {
    // const [searchCustomerDetails, setSearchCustomerDetails] = useState('')
    const [show, setShow] = useState(false);
    const popup =useRef()
    const [displayPurchases, setDisplayPurchases] =useState(true)
    const purchaseRef = useRef()
    const [displayProducts, setDisplayProducts] = useState(false)
    const [displayAnalytics, setDisplayAnalytics ] = useState(false)
    // const productsRef =useRef()
    // const { inputImage, setInputImage } = useState(null)
        
    const closePopup = ()=>{
        setShow(false)
        localStorage.removeItem('selectedImage')
    }
    const view_products =()=>{
    setDisplayPurchases(false)
    setDisplayProducts(true)
    }
    const viewAnalytics = ()=>{
      setDisplayAnalytics(true)
      setDisplayPurchases(false)
    setDisplayProducts(false)
    }
    const closeViewPopup = ()=>{
      setShowProduct(false)
    }
    const [showProduct, setShowProduct] = useState(false);
    const runSetProducts = ()=>{
      setShowProduct(true)
    }
   const dashboard = ()=>{
    setDisplayPurchases(true)
    setDisplayProducts(false)
   }
  //  const fileInput = useRef()
  
     const onFileSelected =(event)=>{
      const files = event.target.files;
      let filename = files[0].name;
      const fileReader = new FileReader();
      
      console.log(files);
      fileReader.addEventListener('load', () =>{     
        const imageUrl = fileReader.result;
      //   setInputImage(imageUrl)
       console.log(imageUrl);
        console.log(filename); 
        localStorage.setItem('selectedImage', imageUrl)
        setShow(true)
      })
      
      fileReader.readAsDataURL(files[0]);
      const image = files[0];
      console.log(image);
      setShow(true)
            } 
const handleClick = ()=>{
  // fileInput.current.click()
}

    return ( 
        <div className="w-screen min-h-screen box-border">
            {show && <div id="popups" ref={popup}>
                <AddProduct closePopoup={closePopup}  />
            </div>
            }
                 {showProduct &&<div id="popups" ref={popup}>
                  <ViewProducts closePopup={closeViewPopup} />
                            </div>
                }
            <div id="flex w-screen min-h-screen box-border">
            <div className="h-screen w-1/4 top-0 sticky box-border">
                <SideBar 
                view_products={view_products}
                dashboard ={dashboard}
                viewAnalytics={viewAnalytics}
                 >
                <CreateProduct  onFileSelected={onFileSelected} >
                <button type="button" onClick={handleClick} 
                 className='bg-purple-500 text-white flex flex-col gap-2.5 py-5 cursor-pointer rounded-sm'
                 >
                  Create Product
                   </button>
                </CreateProduct>
                  </SideBar>
            </div>

            {displayProducts &&
            <ProductsReview  runSetProducts={ runSetProducts } />
            }
            
            {/* {displayPurchases &&
            <Purchases ref={purchaseRef} /> 
            } */}

           {displayAnalytics &&
            <Analytics />
               }
            
            </div>
           
        </div>
     );
}
 
export default AdminPage;